import { User } from '../types';
import { User as UserModel } from '../models/User';

// const users = [
// 	{ id: 1, name: 'Joe Biden', carColorId: 5 },
// 	{ id: 2, name: 'Elon Musk', carColorId: 4 },
// 	{ id: 3, name: 'Pan Roman', carColorId: 2 },
// ];

function getAll() {
	return UserModel.findAll();
}

function getById(id: number) {
	return UserModel.findByPk(id)
}


function create({ name, carColorId }: Omit<User, 'id'>) {
	return UserModel.create( { name, carColorId })
		.catch(error => console.log("Błąd z pobraniem danych z bazu"))
}

function validate({ name, carColorId }: Omit<User, 'id'>): boolean {
	return typeof name === 'string' && typeof carColorId === 'number';
}

export const userService = { validate, getAll, getById, create };
