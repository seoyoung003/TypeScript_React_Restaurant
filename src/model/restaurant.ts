export type Restaurant = {
    name:string;
    category:string;
    address: Address;
    menu: Menu;
}

export type Address = {
    city: string;
    detail: string;
    zipCode: number;

}


export type Menu = {
    name: string;
    price: number;
    category: string;
}

export type AddressWithoutZip = Omit<PaymentAddress, 'zipCoide'>  //address에서 zipcode만 빼고 싶을 땐 재정의가 아닌 이렇게 하면 된다.
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'> //선택한 것만 가져오고 싶을 때 

export type ApiResponse<T>{
    data:T[],
    totalPage:number,
    page:number
}

export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>
