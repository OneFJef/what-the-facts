<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<div class="py-14 mb-4">
	<slot />
</div>
<Footer />
