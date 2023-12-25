
function Checkout() {
  
    return (
      <div>
        <div className=" py-8">
    <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left font-semibold">Product</th>
                                <th className="text-left font-semibold">Price</th>
                                <th className="text-left font-semibold">Quantity</th>
                                <th className="text-left font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image" />
                                        <span className="font-semibold">Product name</span>
                                    </div>
                                </td>
                                <td className="py-4">$19.99</td>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <button className="border rounded-md py-2 px-4 mr-2">-</button>
                                        <span className="text-center w-8">1</span>
                                        <button className="border rounded-md py-2 px-4 ml-2">+</button>
                                    </div>
                                </td>
                                <td className="py-4">$19.99</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>$19.99</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>$1.99</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>$0.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">$21.98</span>
                    </div>
                    {/* <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button> */}
                </div>
            </div>
        </div>
    </div>
    <div className=" dark:bg-gray-900 m-5">
    <div className="w-full  mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label  className="block text-gray-700 dark:text-white mb-1">First Name</label>
                        <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                    </div>
                    <div>
                        <label  className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                        <input type="text" id="last_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                    </div>
                </div>

                <div className="mt-4">
                    <label  className="block text-gray-700 dark:text-white mb-1">Address</label>
                    <input type="text" id="address" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                </div>

                <div className="mt-4">
                    <label  className="block text-gray-700 dark:text-white mb-1">City</label>
                    <input type="text" id="city" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label  className="block text-gray-700 dark:text-white mb-1">State</label>
                        <input type="text" id="state" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                    </div>
                    <div>
                        <label  className="block text-gray-700 dark:text-white mb-1">ZIP Code</label>
                        <input type="text" id="zip" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Payment Information</h2>
                <div className="mt-4">
                    <label  className="block text-gray-700 dark:text-white mb-1">Card Number</label>
                    <input type="text" id="card_number" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label  className="block text-gray-700 dark:text-white mb-1">Expiration Date</label>
                        <input type="text" id="exp_date" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                    </div>
                    <div>
                        <label  className="block text-gray-700 dark:text-white mb-1">CVV</label>
                        <input type="text" id="cvv" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Place Order</button>
            </div>
        </div>
    </div>
</div>

</div>
      </div>
    );
  }
  
  export default Checkout;
  










