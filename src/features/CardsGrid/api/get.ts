import { ICar } from 'types';

export async function fetchCars(): Promise<ICar[]> {
  try {
    const res = await fetch('https://app-douglassilva-api.azurewebsites.net/api/cars')
    return res.json()
  } catch (err) { throw new Error('Error') }
}