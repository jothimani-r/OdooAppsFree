{
    'name': 'Hide Announcement Bar',
    'version': '0.1',
    'category': 'Hidden',
    'depends': ['mail'],
    'author': 'Jothimani R',
    'website': 'www.linkedin.com/in/rjothimani',
    'description': """
        Module which hides the Odoo announcement bar.
    """,
    'data': ['templates.xml'],
    'images': [],
    'js': ['static/src/js/announcement.js'],
    'qweb': [
        "static/src/xml/base.xml",
    ],
    'installable': True,
    'application': False,
}
