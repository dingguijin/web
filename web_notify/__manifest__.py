# pylint: disable=missing-docstring
# Copyright 2016 ACSONE SA/NV
# Copyright 2022 Guijin Ding
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

{
    "name": "Web Notify",
    "summary": """
        Send notification messages to user""",
    "version": "15.0",
    "license": "AGPL-3",
    "author": "ACSONE SA/NV," "AdaptiveCity," "Odoo Community Association (OCA), Guijin Ding",
    "development_status": "Production/Stable",
    "website": "https://github.com/OCA/web",
    "depends": ["web", "bus", "base"],
    "data": ["views/res_users_notify.xml"],
    "demo": [],
    "assets": {
        "web.assets_backend": ['web_notify/static/src/js/web_notify.js']
    },
    "installable": True,
}
