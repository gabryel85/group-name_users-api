// color.service.ts
import { Color } from '../models/Color';

// const colors = [
// 	{ id: 1, name: 'Black' },
// 	{ id: 2, name: 'DeepPink' },
// 	{ id: 3, name: 'Red' },
// 	{ id: 4, name: 'Aquamarine' },
// 	{ id: 5, name: 'Gold' },
// 	{ id: 6, name: 'YellowGreen' },
// 	{ id: 7, name: 'Yellow' },
// ];

function getAll() {
	return Color.findAll();
}

export const colorService = { getAll };
