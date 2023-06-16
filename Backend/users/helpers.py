from .models import Carrito

class CartHelper:

    def __init__(self, user):
        self.user = user        
        self.checkout_details = {'servicios': [], 'total': [], 'amount': []}

    def prepare_cart_for_checkout(self):
        self.cart_items = Carrito.objects.filter(user=self.user)

        if not self.cart_items:
            return False

        self.calculate_cart_base_total_amount()        
        self.prepare_checkout_details()

        return self.checkout_details    


    def prepare_checkout_details(self):
        for cart_item in self.cart_items:
            self.checkout_details['servicio'].append({'category_id': cart_item.item.category.id,
                                                      'nombre': cart_item.servicio.nombre,
                                                      'duracion': cart_item.servicio.duracion,
                                                      'valor': cart_item.servicio.valor,
                                                      'descripcion': cart_item.servicio.descripcion,                                                      
                                                      })

