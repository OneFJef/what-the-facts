import prisma from '$lib/prisma';

/** @type {import('./$types').Actions} */
export const actions = {
	submitFact: async ({ request }) => {
		const form = await request.formData();

		let year = Number(form.get('year'));
		let fact = form.get('fact');

		await prisma.Facts.create({
			data: {
				year,
				fact
			}
		});
	}
};
