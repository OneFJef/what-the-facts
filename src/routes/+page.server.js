import prisma from '$lib/prisma.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const results = await prisma.facts.findMany({
		where: { published: true },
		orderBy: {
			createdAt: 'desc'
		}
	});
	let uniqueDates = [];

	let newObj = {};

	for (let i in results) {
		let sortedObj = results[i]['year'];
		newObj[sortedObj] = results[i];
	}

	for (let i in newObj) {
		uniqueDates.push(newObj[i]);
	}

	let filteredDates = uniqueDates.map(function (data) {
		return data.year;
	});

	return {uniqueDates, filteredDates };
}
