# -*- coding:utf-8 -*-
from openerp import models, fields


class hr_children(models.Model):
    _name = 'hr.employee.children'
    _description = "Employee Children's"

    name = fields.Char("Name", required=True)
    gender = fields.Selection(selection=[('male', 'Male'),
                                         ('female', 'Female')], string='Gender')
    date_of_birth = fields.Date("Date of Birth")
    employee_id = fields.Many2one('hr.employee', "Employee")
