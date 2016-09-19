# -*- coding: utf-8 -*-
from openerp import models, fields


class hr_certification(models.Model):
    _name = 'hr.certification'
    _inherit = 'hr.curriculum'

    certification = fields.Char(string='Certification Number',
                                help='Certification Number')
