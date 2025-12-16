<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
definePageMeta({ layout: "default" });

const lastUpdated = "16 Desember 2025";
</script>

<template>
	<div class="relative isolate px-6 py-24 sm:py-32 lg:px-8 bg-gray-900">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
				{{ locale === "id" ? "Ketentuan Layanan" : "Terms of Service" }}
			</h1>
			<p class="mt-4 text-base leading-7 text-gray-400">
				{{ locale === "id" ? "Terakhir diperbarui:" : "Last updated:" }}
				{{ lastUpdated }}
			</p>
		</div>

		<div
			class="mx-auto mt-16 max-w-3xl text-gray-300 leading-relaxed space-y-8"
		>
			<div v-if="locale === 'id'" class="space-y-6">
				<p>
					Dengan mengakses atau menggunakan Dely Labs, Anda menyetujui ketentuan
					berikut. Mohon dibaca dengan saksama.
				</p>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					1. Penggunaan Layanan
				</h2>
				<p>
					Dely Labs menyediakan serangkaian alat digital ("Layanan") secara
					gratis "sebagaimana adanya". Anda diizinkan menggunakan Layanan ini
					untuk keperluan pribadi maupun komersial. Namun, Anda dilarang
					menyalahgunakan, mencoba membobol, atau merekayasa balik
					(reverse-engineer) infrastruktur kami.
				</p>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					2. Penyangkalan Jaminan (Disclaimer)
				</h2>
				<div class="bg-gray-800 border-l-4 border-teal-500 p-4 rounded-r">
					<p class="text-sm">
						<strong>PENTING:</strong> Layanan ini disediakan tanpa jaminan apa
						pun, tersurat maupun tersirat. Dely Labs tidak bertanggung jawab
						atas kehilangan data, kesalahan pemrosesan dokumen, atau kerugian
						finansial yang timbul akibat penggunaan alat kami. Gunakan dengan
						risiko Anda sendiri.
					</p>
				</div>
				<p>
					Meskipun kami berusaha keras untuk menjaga akurasi dan keandalan
					(misalnya dalam Dely Terbilang atau Dely Sign), teknologi browser
					memiliki keterbatasan yang di luar kendali kami. Selalu verifikasi
					hasil output sebelum digunakan untuk keperluan hukum atau finansial
					yang kritis.
				</p>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					3. Kekayaan Intelektual
				</h2>
				<p>
					Antarmuka visual, logo, dan kode sumber kustom Dely Labs dilindungi
					oleh hak cipta. Hasil olahan dokumen Anda (PDF yang Anda tandatangani,
					data yang Anda konversi) tetap sepenuhnya menjadi milik Anda.
				</p>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					4. Perubahan Ketentuan
				</h2>
				<p>
					Kami berhak mengubah ketentuan ini sewaktu-waktu. Perubahan akan
					berlaku efektif segera setelah diposting di halaman ini.
				</p>
			</div>

			<div v-else class="space-y-6">
				<p>
					By accessing or using Dely Labs, you agree to the following terms.
					Please read them carefully.
				</p>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					1. Use of Service
				</h2>
				<p>
					Dely Labs provides a suite of digital tools (the "Service") free of
					charge on an "as is" basis. You are granted permission to use these
					Services for personal or commercial purposes. You agree not to misuse,
					attempt to breach, or reverse-engineer our infrastructure.
				</p>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					2. Disclaimer of Warranties
				</h2>
				<div class="bg-gray-800 border-l-4 border-teal-500 p-4 rounded-r">
					<p class="text-sm">
						<strong>IMPORTANT:</strong> The Service is provided without
						warranties of any kind, whether express or implied. Dely Labs is not
						liable for data loss, document processing errors, or financial
						damages arising from the use of our tools. Use at your own risk.
					</p>
				</div>
				<p>
					While we strive for accuracy and reliability (e.g., in Dely Terbilang
					or Dely Sign), browser technologies have limitations beyond our
					control. Always verify the output before using it for critical legal
					or financial purposes.
				</p>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					3. Intellectual Property
				</h2>
				<p>
					The visual interfaces, logos, and custom source code of Dely Labs are
					protected by copyright. The output of your processed documents (the
					PDFs you sign, the data you convert) remains entirely your property.
				</p>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					4. Changes to Terms
				</h2>
				<p>
					We reserve the right to modify these terms at any time. Changes become
					effective immediately upon posting to this page.
				</p>
			</div>
		</div>
	</div>
</template>
