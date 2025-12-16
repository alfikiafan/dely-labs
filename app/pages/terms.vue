<script setup>
const { locale } = useI18n();
definePageMeta({ layout: "default" });
</script>

<template>
	<div class="relative isolate px-6 py-24 sm:py-32 lg:px-8 bg-void-900">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
				{{ $t("legal.terms_title") }}
			</h1>
			<p class="mt-6 text-base leading-7 text-gray-400">
				{{ $t("legal.last_updated") }}
			</p>
		</div>

		<div class="mx-auto mt-16 max-w-2xl text-gray-300 leading-7 space-y-6">
			<div v-if="locale === 'id'">
				<p>
					Dengan mengakses website Dely Labs, Anda setuju untuk terikat dengan
					persyaratan layanan ini.
				</p>
				<h2 class="text-xl font-bold text-white mt-8">1. Lisensi Penggunaan</h2>
				<p>
					Izin diberikan untuk menggunakan alat-alat di Dely Labs untuk
					keperluan pribadi maupun komersial, selama tidak menyalahgunakan kode
					sumber.
				</p>
				<h2 class="text-xl font-bold text-white mt-8">2. Penafian</h2>
				<p>
					Materi di situs web Dely Labs disediakan "apa adanya". Dely Labs tidak
					memberikan jaminan tersurat maupun tersirat.
				</p>
			</div>

			<div v-else>
				<p>
					By accessing the Dely Labs website, you agree to be bound by these
					terms of service.
				</p>
				<h2 class="text-xl font-bold text-white mt-8">1. Use License</h2>
				<p>
					Permission is granted to use Dely Labs tools for personal and
					commercial purposes, provided you do not misuse the source code.
				</p>
				<h2 class="text-xl font-bold text-white mt-8">2. Disclaimer</h2>
				<p>
					The materials on Dely Labs' website are provided on an 'as is' basis.
					Dely Labs makes no warranties, expressed or implied.
				</p>
			</div>
		</div>
	</div>
</template>
