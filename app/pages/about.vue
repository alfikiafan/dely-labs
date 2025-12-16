<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

definePageMeta({ layout: "default" });

const founderName = "Alfiki Diastama";
</script>

<template>
	<div class="relative isolate px-6 py-24 sm:py-32 lg:px-8 bg-gray-900">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
				{{ locale === "id" ? "Tentang Kami" : "About Us" }}
			</h1>
		</div>

		<div
			class="mx-auto mt-20 max-w-3xl text-gray-300 leading-relaxed space-y-8"
		>
			<div v-if="locale === 'id'" class="space-y-6">
				<h2
					class="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2"
				>
					Misi Kami
				</h2>
				<p>
					Di tengah hiruk pikuk ruang utilitas digital, alat yang seharusnya
					mempermudah sering kali justru menambah beban—baik itu karena desain
					yang rumit, bloatware, atau kekhawatiran data yang bocor.
				</p>
				<p>
					Dely Labs lahir dari kebutuhan fundamental: menciptakan utilitas
					digital yang benar-benar andal, cepat, dan aman. Kami percaya bahwa
					alat yang paling canggih adalah alat yang paling sederhana digunakan.
				</p>

				<h2
					class="text-2xl font-bold text-white pt-6 mb-4 border-b border-gray-700 pb-2"
				>
					Tiga Pilar Filosofi Kami
				</h2>
				<p>
					Setiap produk yang lahir dari Dely Labs berpegang teguh pada tiga
					prinsip inti:
				</p>
				<ul class="list-disc pl-8 space-y-2 text-gray-400">
					<li>
						Keandalan (Reliability): Kami merancang setiap alat untuk berfungsi
						sebagaimana mestinya, setiap saat, tanpa error atau fitur yang
						berlebihan.
					</li>
					<li>
						Kesederhanaan (Simplicity): Kami menghilangkan kompleksitas teknis
						aplikasi besar. Fokus kami adalah pada inti masalah, memangkas semua
						hambatan antara Anda dan tugas yang perlu diselesaikan.
					</li>
					<li>
						Orientasi Pengguna (User-Centricity): Setiap fitur dibangun dengan
						mempertimbangkan pengalaman pengguna di atas segalanya.
					</li>
				</ul>

				<h2
					class="text-2xl font-bold text-white pt-6 mb-4 border-b border-gray-700 pb-2"
				>
					Komitmen Kami pada Privasi
				</h2>
				<p>
					Kami memprioritaskan privasi Anda di atas segalanya. Inti dari Dely
					Labs adalah komitmen untuk menjaga data Anda tetap di browser Anda
					semaksimal mungkin. Ini adalah langkah proaktif kami untuk memastikan
					informasi sensitif Anda aman dan terkendali.
				</p>

				<h2
					class="text-2xl font-bold text-white pt-6 mb-4 border-b border-gray-700 pb-2"
				>
					Visi dan Pendiri
				</h2>
				<p>
					Saat ini, semua alat inti Dely Labs disediakan secara gratis. Bagi
					kami, kebermanfaatan dan nilai yang kami berikan kepada pengguna jauh
					lebih penting daripada pendapatan. Fokus kami adalah membangun
					komunitas pengguna yang solid dan kemudian kami akan menjelajahi
					berbagai kemungkinan monetisasi yang berpotensi.
				</p>
				<p class="font-semibold text-white mt-4">
					Dely Labs didirikan oleh {{ founderName }}, seorang yang percaya pada
					kekuatan kode yang bersih dan desain yang presisi. Kami adalah tim
					kecil dengan ambisi besar.
				</p>
				<p>
					Kami selalu terbuka untuk kolaborasi dan potensi kerja sama dengan
					individu maupun perusahaan yang memiliki visi yang sama dalam
					membangun solusi yang elegan dan efektif.
				</p>
			</div>

			<div v-else class="space-y-6">
				<h2
					class="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2"
				>
					Our Mission
				</h2>
				<p>
					In the bustling digital utility space, tools designed to help often
					create friction—whether through overly complicated interfaces, bloat,
					or persistent data privacy concerns.
				</p>
				<p>
					Dely Labs emerged from a fundamental need: to build digital utilities
					that are genuinely reliable, fast, and secure. We believe the most
					powerful technology is the one that is easiest to use.
				</p>

				<h2
					class="text-2xl font-bold text-white pt-6 mb-4 border-b border-gray-700 pb-2"
				>
					Our Three Philosophical Pillars
				</h2>
				<p>
					Every product born from Dely Labs adheres to three core principles:
				</p>
				<ul class="list-disc pl-8 space-y-2 text-gray-400">
					<li>
						Reliability: We engineer every tool to function exactly as intended,
						every time, free from bugs or unnecessary features.
					</li>
					<li>
						Simplicity: We cut through the technical complexity often found in
						larger applications. Our focus is on the core task, removing all
						friction between you and the job at hand.
					</li>
					<li>
						User-Centricity: Every design decision prioritizes the user
						experience above all else.
					</li>
				</ul>

				<h2
					class="text-2xl font-bold text-white pt-6 mb-4 border-b border-gray-700 pb-2"
				>
					Our Commitment to Privacy
				</h2>
				<p>
					Your privacy is non-negotiable. At the heart of Dely Labs is a
					profound commitment to keeping your data contained within your browser
					whenever possible. This is our proactive step to ensure your sensitive
					information remains secure and under your control.
				</p>

				<h2
					class="text-2xl font-bold text-white pt-6 mb-4 border-b border-gray-700 pb-2"
				>
					Vision and Founder
				</h2>
				<p>
					Currently, all core Dely Labs tools are provided free of charge. We
					prioritize utility and the value we deliver over immediate revenue.
					Our focus is on building a solid user base and providing genuine,
					reliable benefits. We will then explore potential monetization avenues
					that enable us to sustainably enhance and expand our services.
				</p>
				<p class="font-semibold text-white mt-4">
					Dely Labs was founded by {{ founderName }}, an individual who believes
					in the power of clean code and precise design. We are a lean team with
					big ambitions.
				</p>
				<p>
					We are always open to collaboration and partnership with individuals
					and companies who share our vision for building effective and elegant
					solutions.
				</p>
			</div>
		</div>
	</div>
</template>
