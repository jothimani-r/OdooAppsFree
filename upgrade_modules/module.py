from openerp import models, fields, api


class module(models.Model):
    _inherit = "ir.module.module"

    @api.model
    def fields_view_get(self, view_id=None, view_type='form', context=None, toolbar=False, submenu=False):
        res = super(module, self).fields_view_get(view_id=view_id, view_type=view_type, context=context,
                                                  toolbar=toolbar, submenu=False)
        result = \
        self.env['ir.model.data'].get_object_reference('upgrade_modules', 'action_server_module_immediate_upgrade')[
            1]
        if view_type == 'form':
            if res.get('toolbar', False):
                list = [rec for rec in res['toolbar']['action'] if rec.get('id', False) != result]
                res['toolbar'] = {'action': list}
        return res
