import unittest
# import json
# from rest_utils import *
from server.api.swen_344_db_utils import exec_sql_file
from test.rest_utils import get_rest_call, post_rest_call, put_rest_call


class TestExample(unittest.TestCase):
    def test_get_all_courses(self):
        exec_sql_file('react4_schema.sql')
        result = get_rest_call(self, 'http://localhost:5000/coursedata')
        print("===> All courses: \n" + str(result))
        self.assertEqual(9, len(result))

    # def test_get_course_by_id(self):
    #     exec_sql_file('react4_schema.sql')
    #     result = get_rest_call(self, 'http://localhost:5000/coursedata/1')
    #     self.assertEqual(1, result[0])
    #     print(str(result))

    def test_add_course(self):
        exec_sql_file('react4_schema.sql')
        body = {'name': 'new_swen121',
                'c_desc': 'new course', 'details': 'no students here', 'dept_id': 1}
        result = post_rest_call(self, 'http://localhost:5000/coursedata/', body)
        self.assertEqual(10, len(result))
        print("\n => After add 1 course to list:\n " + str(result))

    def test_update_course(self):
        exec_sql_file('react4_schema.sql')
        updated_body = {'c_desc': 'new course description', 'details': 'bruh'}
        result = put_rest_call(self, 'http://localhost:5000/coursedata/1', updated_body)
        self.assertEqual(9, len(result))
        print("\n => list After update a course desc and details: \n" + str(result))
