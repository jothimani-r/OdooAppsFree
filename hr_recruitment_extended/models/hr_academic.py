# -*- coding: utf-8 -*-
from openerp import models, fields


class hr_academic(models.Model):
    _name = 'hr.academic'
    _inherit = 'hr.curriculum'

    study_field = fields.Char(string='Field of study', translate=True,)
    activities = fields.Text(string='Activities and associations',
                             translate=True)
