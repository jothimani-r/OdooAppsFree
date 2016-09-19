# -*- coding: utf-8 -*-
from openerp import models, fields


class hr_experience(models.Model):
    _name = 'hr.experience'
    _inherit = 'hr.curriculum'

    notice_period = fields.Selection(
        [('s_notice_period', 'Serving Notice Period'), ('15days', '15 Days or less'), ('1month', '1 Month'),
         ('2months', '2 Months'), ('3months', '3 Months'), ('above3months', 'More than 3 Months')], required=True,
        default='')
    referee_name = fields.Char(string="Name of referee")
    referee_position = fields.Char(string="Position of referee")
    referee_contact = fields.Char(string="Contact details")
    type = fields.Selection([('full_time', 'Full time'), ('part_time', 'Part time')], 'Work type', required=True,
                            default='full_time', help='Work type')
