from .models import Carrito

class CartHelper:

    def __init__(self, user):
        self.user = user
        self.cart_base_total_amount = 0
        self.cart_final_total_amount = 0
        self.campaign_discount_amounts = []
        self.campaign_discount_amount = 0
        self.coupon_discount_amount = 0
        self.delivery_cost = 0
        self.cart_items = []
        self.discounts = {}
        self.checkout_details = {'servicios': [], 'total': [], 'amount': []}

    def prepare_cart_for_checkout(self):
        self.cart_items = Carrito.objects.filter(user=self.user)

        if not self.cart_items:
            return False

        self.calculate_cart_base_total_amount()        
        self.prepare_checkout_details()

        return self.checkout_details    

    # def calculate_cart_base_total_amount(self):
    #     for cart_item in self.cart_items:
    #         self.cart_base_total_amount += cart_item.item.price * cart_item.quantity  

    # def get_total_amount_after_discounts(self):

    #     if len(self.campaign_discount_amounts) > 0:
    #         self.campaign_discount_amount = max(self.campaign_discount_amounts)

    #     self.cart_final_total_amount = self.cart_base_total_amount - (
    #                 self.campaign_discount_amount + self.coupon_discount_amount)

    #     return self.cart_final_total_amount

    def prepare_checkout_details(self):
        for cart_item in self.cart_items:
            self.checkout_details['servicio'].append({'category_id': cart_item.item.category.id,
                                                      'nombre': cart_item.servicio.nombre,
                                                      'duracion': cart_item.servicio.duracion,
                                                      'valor': cart_item.servicio.valor,
                                                      'descripcion': cart_item.servicio.descripcion,                                                      
                                                      })

        # self.checkout_details['total'].append({'total_price': self.cart_base_total_amount,
        #                                        'total_discount':
        #                                            self.campaign_discount_amount + self.coupon_discount_amount})

        # self.checkout_details['amount'].append({'total_amount': self.cart_final_total_amount,
        #                                         'delivery_cost': self.delivery_cost})
