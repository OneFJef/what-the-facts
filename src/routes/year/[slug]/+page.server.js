import prisma from '$lib/prisma.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const facts = await prisma.facts.findMany({
		where: { year: Number(params.slug), published: true }
	});
	const year = params.slug;
	return { facts, year };
}
