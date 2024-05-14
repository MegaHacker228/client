import { $authHost, $host } from "./index";

export const createCar = async (car) => {
    const {data} = await $authHost.post('api/car', car)
    return data
}

export const fetchCar = async () => {
    const {data} = await $host.get('api/car')
    return data
}

export const fetchOneCar = async (car_id) => {
    const {data} = await $host.get('api/car/' + car_id)
    return data
}
