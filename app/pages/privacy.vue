<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
definePageMeta({ layout: "default" });

// Tanggal update terakhir (bisa dibuat dinamis atau hardcoded)
const lastUpdated = "16 Desember 2025";
</script>

<template>
	<div class="relative isolate px-6 py-24 sm:py-32 lg:px-8 bg-gray-900">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
				{{ locale === "id" ? "Kebijakan Privasi" : "Privacy Policy" }}
			</h1>
			<p class="mt-4 text-base leading-7 text-gray-300">
				{{ locale === "id" ? "Terakhir diperbarui:" : "Last updated:" }}
				{{ lastUpdated }}
			</p>
		</div>

		<div
			class="mx-auto mt-16 max-w-3xl text-gray-300 leading-relaxed space-y-8"
		>
			<div v-if="locale === 'id'" class="space-y-6">
				<p>
					Di Dely Labs, privasi Anda bukan sekadar kewajiban hukum, melainkan
					fondasi dari arsitektur teknis kami. Kebijakan ini menjelaskan
					bagaimana kami menangani data Anda.
				</p>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					1. Arsitektur "Client-Side First"
				</h2>
				<p>
					Mayoritas alat kami (termasuk <strong>Dely Sign</strong>,
					<strong>Dely Kit</strong>, dan <strong>Dely Compare</strong>)
					dirancang untuk memproses data langsung di browser Anda menggunakan
					teknologi seperti WebAssembly dan JavaScript modern.
				</p>
				<ul class="list-disc pl-5 space-y-2 text-gray-300">
					<li>
						<strong>File Anda tidak diunggah ke server kami.</strong> Pemrosesan
						PDF, konversi gambar, atau perbandingan data terjadi secara lokal di
						perangkat Anda.
					</li>
					<li>
						Kami tidak memiliki akses, tidak menyimpan, dan tidak dapat melihat
						isi dokumen yang Anda proses.
					</li>
				</ul>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					2. Informasi yang Kami Kumpulkan
				</h2>
				<p>
					Karena sifat terdesentralisasi kami, data yang kami kumpulkan sangat
					minimal:
				</p>
				<ul class="list-disc pl-5 space-y-2 text-gray-300">
					<li>
						<strong>Log Infrastruktur:</strong> Seperti standar situs web pada
						umumnya, server kami (atau penyedia CDN kami) mungkin mencatat
						alamat IP, jenis browser, dan waktu akses untuk keperluan keamanan
						dan pemantauan kinerja.
					</li>
					<li>
						<strong>Penyimpanan Lokal (Local Storage):</strong> Kami menggunakan
						penyimpanan di browser Anda untuk menyimpan preferensi (seperti mode
						gelap/terang atau pengaturan bahasa). Data ini tidak dikirim ke
						server kami.
					</li>
				</ul>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					3. Layanan Pihak Ketiga
				</h2>
				<p>
					Kami dapat menggunakan layanan analitik pihak ketiga yang menghormati
					privasi untuk memahami tren penggunaan situs web secara umum (anonim).
					Kami tidak menggunakan pelacak iklan yang invasif.
				</p>
			</div>

			<div v-else class="space-y-6">
				<p>
					At Dely Labs, your privacy is not just a legal obligation—it is the
					foundation of our technical architecture. This policy explains how we
					handle your data.
				</p>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					1. "Client-Side First" Architecture
				</h2>
				<p>
					Most of our tools (including <strong>Dely Sign</strong>,
					<strong>Dely Kit</strong>, and <strong>Dely Compare</strong>) are
					engineered to process data directly within your browser using
					technologies like WebAssembly and modern JavaScript.
				</p>
				<ul class="list-disc pl-5 space-y-2 text-gray-300">
					<li>
						<strong>Your files are NOT uploaded to our servers.</strong> PDF
						processing, image conversion, or data comparison happens locally on
						your device.
					</li>
					<li>
						We do not access, store, or view the content of the documents you
						process.
					</li>
				</ul>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					2. Information We Collect
				</h2>
				<p>Due to our decentralized nature, the data we collect is minimal:</p>
				<ul class="list-disc pl-5 space-y-2 text-gray-300">
					<li>
						<strong>Infrastructure Logs:</strong> Like standard websites, our
						servers (or CDN providers) may log IP addresses, browser types, and
						access times for security and performance monitoring.
					</li>
					<li>
						<strong>Local Storage:</strong> We use your browser's local storage
						to save preferences (like dark/light mode or language settings).
						This data is not sent to our servers.
					</li>
				</ul>

				<h2
					class="text-2xl font-bold text-white mt-8 mb-4 border-b border-gray-700 pb-2"
				>
					3. Third-Party Services
				</h2>
				<p>
					We may use privacy-respecting third-party analytics services to
					understand general website usage trends (anonymously). We do not use
					invasive ad trackers.
				</p>
			</div>
		</div>
	</div>
</template>
