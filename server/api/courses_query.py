"""gets all courses info"""
from api.swen_344_db_utils import exec_get_all, exec_get_one, exec_commit


def get_all_courses():
    sql = """SELECT * FROM public.courses ORDER BY id ASC """
    rows = exec_get_all(sql)
    result = []
    for row in rows:
        result.append({
            "id": row[0],
            "dept_id": row[1],
            "name": row[2],
            "c_desc": row[3],
            "details": row[4],
            "selected": row[5]
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
