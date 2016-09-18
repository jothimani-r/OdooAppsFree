# -*- coding: utf-8 -*-
##############################################################################
#
#    OpenERP, Open Source Management Solution
#    Copyright (c) 2010-2014 Elico Corp. All Rights Reserved.
#    Jothimani Rajagopal <jothimani1991@gmail.com>
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################
{
    'name': 'Hide Announcement Bar',
    'version': '0.1',
    'category': 'Hidden',
    'depends': ['mail'],
    'author': 'Jothimani R',
    'license': 'AGPL-3',
    'website': 'www.linkedin.com/in/rjothimani',
    'description': """
        Module which hides the Odoo announcement bar.
    """,
    'data': ['templates.xml'],
    'images': [],    
    'js': ['static/src/js/announcement.js'],
    'qweb' : [
        "static/src/xml/base.xml",
    ],    
    'installable': True,
    'application': False,
}
