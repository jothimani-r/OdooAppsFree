# -*- coding: utf-8 -*-
from openerp import models, api


class purchase_order_batch_confirm(models.TransientModel):
    _name = 'purchase.batch.confirm'

    @api.multi
    def batch_confirm_po(self):
        active_ids = self.env.context.get('active_ids', [])
        PurchaseOrders = self.env['purchase.order'].search([('id', 'in', active_ids), ('state', '=', 'draft')])
        PurchaseOrders.button_confirm()
