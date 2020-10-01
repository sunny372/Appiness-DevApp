import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Orderslist {
  getOrderList(): Array<any> {
    const ol = [
      {
        _id: '5f757f7d49bdddb94acf63a9',
        customerName: 'Ingram Lamb',
        orderedItems: 2,
        totalAmount: 184,
        orderStatus: 'Order Received',
        items: 'dolor deserunt, minim sunt',
        price: '74, 85',
        address: '810 Coles Street, Gardiner, Connecticut, 5901'
      },
      {
        _id: '5f757f7d59edd78eca72a3fe',
        customerName: 'Washington Wise',
        orderedItems: 2,
        totalAmount: 194,
        orderStatus: 'Order Received',
        items: 'culpa cupidatat, nisi id',
        price: '104, 64',
        address: '136 Johnson Avenue, Lodoga, Hawaii, 601'
      },
      {
        _id: '5f757f7ddb5aad922771a87b',
        customerName: 'Kathryn Hoover',
        orderedItems: 2,
        totalAmount: 169,
        orderStatus: 'Order Received',
        items: 'anim voluptate, ut deserunt',
        price: '89, 73',
        address: '990 Morgan Avenue, Matthews, Northern Mariana Islands, 6806'
      },
      {
        _id: '5f757f7d9c612541afa1cbde',
        customerName: 'Mendoza Winters',
        orderedItems: 2,
        totalAmount: 198,
        orderStatus: 'Order Received',
        items: 'consequat culpa, duis est',
        price: '83, 96',
        address: '197 Woodside Avenue, Guilford, Guam, 3900'
      },
      {
        _id: '5f757f7dfb443d715a154b96',
        customerName: 'Melendez Cardenas',
        orderedItems: 2,
        totalAmount: 198,
        orderStatus: 'Order Received',
        items: 'quis ex, ut magna',
        price: '107, 81',
        address: '729 Aberdeen Street, Rodman, New York, 5369'
      },
      {
        _id: '5f757f7d184a693f69f14bdf',
        customerName: 'Boone Cantu',
        orderedItems: 2,
        totalAmount: 168,
        orderStatus: 'Order Received',
        items: 'eiusmod id, qui dolore',
        price: '115, 45',
        address: '743 Milton Street, Neahkahnie, Marshall Islands, 6137'
      },
      {
        _id: '5f757f7d608a17d417d3368e',
        customerName: 'Tammy Whitaker',
        orderedItems: 2,
        totalAmount: 154,
        orderStatus: 'Order Received',
        items: 'laboris mollit, eiusmod ut',
        price: '89, 40',
        address: '241 Grant Avenue, Bladensburg, Florida, 4949'
      }
    ];
    return ol;
  }
}
