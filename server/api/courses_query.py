"""gets all courses info"""
from api.swen_344_db_utils import exec_get_all, exec_get_one, exec_commit


def get_all_courses():
    sql = """ 
    SELECT id, name, c_desc, details FROM public.courses ORDER BY id ASC 
	"""
    rows = exec_get_all(sql)
    result = []
    for row in rows:
        course_id = row[0]
        department_name = get_department_name_by_courseID(course_id)
        college_name = get_collegename_by_courseID(course_id)
        result.append({
            "id": row[0],
            "name": row[1],
            "c_desc": row[2],
            "details": row[3],
            "department": department_name,
            "college": college_name
        })
    return result


def get_single_course_by_id():
    sql = """SELECT row_to_json(courses) FROM public.courses"""
    return exec_get_one(sql)


def add_course(name, description, detail, department_id):
    """add a new course to db"""
    sql = """
    INSERT INTO public.courses(dept_id, name, c_desc, details, selected)
	VALUES (%d, '%s', '%s', '%s', FALSE)
    """ % (department_id, name, description, detail)
    exec_commit(sql)


def update_course(course_id, updated_field, updated_content):
    """update a specified field by course id"""
    sql = """
    UPDATE courses SET %s ='%s' WHERE id=%d Returning *;
    """ % (updated_field, updated_content, course_id)
    exec_commit(sql)


def get_department_name_by_courseID(course_id):
    sql = """
    SELECT department.name
	FROM department 
	INNER JOIN courses ON courses.dept_id=department.id
	WHERE courses.id=%d;
    """ % course_id
    return exec_get_one(sql)[0]


def get_departmentID_by_courseID(course_id):
    sql = """
   SELECT dept_id
	FROM courses
	WHERE courses.id=%d;
    """ % course_id
    return exec_get_one(sql)[0]


def get_collegename_by_courseID(course_id):
    department_ID = int(get_departmentID_by_courseID(course_id))
    sql = """
    SELECT college.name
	FROM public.college  
	INNER JOIN department ON college.id=department.college_id
	WHERE department.id=%d
    """ % department_ID
    return exec_get_one(sql)[0]
