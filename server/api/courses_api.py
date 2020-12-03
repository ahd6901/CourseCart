from flask_restful import Resource, reqparse

# from flask_restful import request
# from flask_restful import reqparse
# import json
from .courses_query import get_all_courses, get_single_course_by_id, add_course, update_course
from .swen_344_db_utils import *


# class ExampleApi(Resource):
#     def get(self):
#         # NOTE: No need to replicate code; use the util function!
#         result = exec_get_one("SELECT COUNT(*) FROM courses");
#         return result
#
#
# class TestMessage(Resource):
#     def get(self):
#         return "Modal components can use onOpened to fetch data dynamically!"
class GetAllCoursesData(Resource):
    def get(self):
        return get_all_courses()


class GetCourseById(Resource):
    def get(self, course_id):
        return get_single_course_by_id(course_id)


class AddCourse(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('dept_id', type=int)
        parser.add_argument('name', type=str)
        parser.add_argument('c_desc', type=str)
        parser.add_argument('details', type=str)
        selected_dept_id = parser.parse_args()["dept_id"]
        selected_name = parser.parse_args()["name"]
        selected_desc = parser.parse_args()["c_desc"]
        selected_details = parser.parse_args()["details"]
        add_course(selected_name, selected_desc, selected_details, selected_dept_id)
        return get_all_courses()


class UpdateCourseById(Resource):
    def put(self, course_id):
        parser = reqparse.RequestParser()
        parser.add_argument('dept_id', type=int)
        parser.add_argument('name', type=str)
        parser.add_argument('c_desc', type=str)
        parser.add_argument('details', type=str)
        updated_dept_id = parser.parse_args()["dept_id"]
        updated_name = parser.parse_args()["name"]
        updated_desc = parser.parse_args()["c_desc"]
        updated_details = parser.parse_args()["details"]
        if updated_dept_id is not None:
            update_course(course_id, 'dept_id', updated_dept_id)
        if updated_name is not None:
            update_course(course_id, 'name', updated_name)
        if updated_desc is not None:
            update_course(course_id, 'c_desc', updated_desc)
        if updated_details is not None:
            update_course(course_id, 'details', updated_details)
        return get_all_courses()
