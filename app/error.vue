<script setup>
const props = defineProps({
	error: Object,
});

const handleError = () => {
	clearError({ redirect: "/" });
};

const auroraStyle = {
	clipPath:
		"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
};
</script>

<template>
	<div
		class="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#020617] font-sans px-6 text-center text-white"
	>
		<div
			class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#C026D3] to-[#0F172A] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				:style="auroraStyle"
			/>
		</div>

		<div
			class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none"
		>
			<div
				class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				:style="auroraStyle"
			/>
		</div>

		<div class="relative z-10 max-w-xl mx-auto">
			<h1
				class="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 tracking-tighter mb-2"
			>
				{{ error.statusCode }}
			</h1>

			<h2 class="text-3xl font-bold text-white mb-4">
				{{ $t("error.title") }}
			</h2>

			<p class="text-lg text-gray-400 mb-10 leading-relaxed">
				{{ $t("error.desc") }}
			</p>

			<button
				@click="handleError"
				class="group inline-flex items-center gap-3 rounded-full bg-[#C026D3] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-500 hover:shadow-fuchsia-500/50 transition-all duration-300"
			>
				<Icon
					name="lucide:arrow-left"
					size="18"
					class="group-hover:-translate-x-1 transition-transform"
				/>
				{{ $t("error.back") }}
			</button>
		</div>
	</div>
</template>
