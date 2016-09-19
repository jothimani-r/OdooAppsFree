{
    'name': 'Hide Announcement Bar',
    'version': '1.0',
    'category': 'Hidden',
    'depends': ['mail'],
    'author': 'Jothimani R',
    'website': 'www.linkedin.com/in/rjothimani',
    'description': """
        Module which hides the Odoo announcement bar.
    """,
    'data': ['templates.xml'],
    'js': ['static/src/js/announcement.js'],
    'qweb': [
        "static/src/xml/base.xml",
    ],
    'installable': True,
    'application': False,
}