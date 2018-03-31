# -*- coding: utf-8 -*-
{
    'name': "Uninstall Apps",

    'summary': """
        Uninstall the selected app(s) immediately and fully""",

    'description': """
        Perform the various steps required to uninstall a module completely including the deletion of all database structures created by the module: tables, columns, constraints, etc.
    """,

    'author': "Jothimani R",
    'website': "www.linkedin.com/in/jothimani-r",
    'license': 'AGPL-3',
    'category': 'Utilities',
    'version': '0.1',
    'depends': ['base'],
    'data': [
        'base_module_immediate_uninstall.xml',
    ],
    'images': ['images/main_screenshot.png'],
}
