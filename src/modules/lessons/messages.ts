/** Strings of the getting started lessons (the lesson content itself is in the content service). */
import { defineMessages } from "../../services/i18n/localize";

export const lessonsMessages = defineMessages({
	fr: {
		lesson: "Leçon",
		toUseCases: "Passer aux use cases",
		gsIntro:
			"Onze leçons courtes pour découvrir pstack, dans l'ordre. Lis-les d'une traite ou saute à celle qui t'intéresse.",
		verifCaption:
			"La diapo du talk : la feature map donne le contexte, le CLI donne le contrôle. Ensemble, l'agent peut vérifier son propre travail.",
		verifSource: "Talk, vers 09:08",
		featureMap: {
			get: "Ce que tu obtiens : un skill, avec un CLI et une feature map",
			skill: "Le mode d'emploi",
			skillD: "Comment lancer l'app, vérifier qu'elle est saine, la piloter et ranger les preuves.",
			cli: "Le CLI",
			cliD: "Une commande qui lance l'app, la pilote et capture les preuves, toujours de la même façon.",
			map: "La feature map",
			mapD: "Où se trouve chaque fonctionnalité, comment y arriver et comment prouver qu'elle marche.",
			tree: [
				"le mode d'emploi",
				"le CLI",
				"la feature map",
				"l'index et les règles communes",
				"une fonctionnalité",
				"une autre fonctionnalité",
			] satisfies readonly [string, string, string, string, string, string],
			cliH: "D'où vient control-notes ?",
			cliP: [
				"Dans l'exemple, l'app s'appelle Notes et elle est imaginaire. <code>control-notes</code> est le CLI de son skill de vérification : c'est lui que les fichiers de la feature map appellent à chaque étape.",
				"Dans son talk, l'autrice explique qu'un skill de vérification a deux parties. D'abord un CLI rangé dans le dossier du skill, pour que chaque agent lance l'app et récolte ses preuves de la même façon, au lieu de réécrire un script à chaque session. Ensuite la feature map, qui dit à l'agent où se trouve chaque fonctionnalité.",
				"/create-verification-skill ne dit pas « CLI » mot pour mot. Il réutilise d'abord ce que ton repo a déjà (Playwright, un harness PTY, curl), puis exige que chaque script livré avec le skill soit exécutable et documenté, dans la section Helpers. Ce script, c'est ton CLI. Pour des CLI génériques, pstack renvoie à control-cli et control-ui, livrés dans un autre plugin, cursor-team-kit.",
			],
			talk: "Talk, de 09:10 à 11:40",
			skillSrc: "create-verification-skill, sections 2 et 3",
			look: "Les fichiers du skill",
			src: "README, create-note et search sont les fichiers d'exemple de pstack, en entier. pstack ne fournit pas de SKILL.md d'exemple : celui-ci est reconstitué d'après les consignes de create-verification-skill.",
		},
	},
	en: {
		lesson: "Lesson",
		toUseCases: "Go to use cases",
		gsIntro: "Eleven short lessons to discover pstack, in order. Read them in one go or jump to the one you need.",
		verifCaption:
			"The talk slide: the feature map gives context, the CLI gives control. Together, the agent can verify its own work.",
		verifSource: "Talk, around 09:08",
		featureMap: {
			get: "What you get: a skill, with a CLI and a feature map",
			skill: "The instructions",
			skillD: "How to start the app, check it's healthy, drive it and store the proof.",
			cli: "The CLI",
			cliD: "One command that starts the app, drives it and captures proof, the same way every time.",
			map: "The feature map",
			mapD: "Where each feature lives, how to reach it and how to prove it works.",
			tree: [
				"the instructions",
				"the CLI",
				"the feature map",
				"the index and shared rules",
				"one feature",
				"another feature",
			],
			cliH: "Where does control-notes come from?",
			cliP: [
				"In the example, the app is called Notes and it's made up. <code>control-notes</code> is the CLI of its verification skill: it's what the feature map files call at every step.",
				"In her talk, the author explains that a verification skill has two parts. First, a CLI stored in the skill folder, so every agent starts the app and collects proof the same way, instead of writing a new script each session. Second, the feature map, which tells the agent where each feature lives.",
				'/create-verification-skill doesn\'t say "CLI" word for word. It first reuses what your repo already has (Playwright, a PTY harness, curl), then requires every script shipped with the skill to be executable and documented, in the Helpers section. That script is your CLI. For generic CLIs, pstack points to control-cli and control-ui, shipped in another plugin, cursor-team-kit.',
			],
			talk: "Talk, 09:10 to 11:40",
			skillSrc: "create-verification-skill, sections 2 and 3",
			look: "The skill's files",
			src: "README, create-note and search are pstack's example files, in full. pstack ships no example SKILL.md: this one is rebuilt from the instructions in create-verification-skill.",
		},
	},
	es: {
		gsIntro:
			"Once lecciones cortas para descubrir pstack, en orden. Léelas de un tirón o salta a la que te interese.",
		verifCaption:
			"La diapositiva de la charla: la feature map da el contexto, el CLI da el control. Juntos, el agente puede verificar su propio trabajo.",
		verifSource: "Charla, hacia 09:08",
		featureMap: {
			get: "Lo que obtienes: un skill, con un CLI y una feature map",
			skill: "Las instrucciones",
			skillD: "Cómo arrancar la app, comprobar que está sana, manejarla y guardar las pruebas.",
			cli: "El CLI",
			cliD: "Un comando que arranca la app, la maneja y captura pruebas, siempre de la misma manera.",
			map: "La feature map",
			mapD: "Dónde está cada funcionalidad, cómo llegar a ella y cómo demostrar que funciona.",
			tree: [
				"las instrucciones",
				"el CLI",
				"la feature map",
				"el índice y las reglas comunes",
				"una funcionalidad",
				"otra funcionalidad",
			],
			cliH: "¿De dónde sale control-notes?",
			cliP: [
				"En el ejemplo, la app se llama Notes y es imaginaria. <code>control-notes</code> es el CLI de su skill de verificación: es lo que los archivos de la feature map llaman en cada paso.",
				"En su charla, la autora explica que un skill de verificación tiene dos partes. Primero, un CLI guardado en la carpeta del skill, para que cada agente arranque la app y recoja pruebas de la misma manera, en vez de escribir un script nuevo en cada sesión. Después, la feature map, que le dice al agente dónde está cada funcionalidad.",
				"/create-verification-skill no dice «CLI» palabra por palabra. Primero reutiliza lo que tu repo ya tiene (Playwright, un harness PTY, curl) y luego exige que cada script incluido en el skill sea ejecutable y esté documentado, en la sección Helpers. Ese script es tu CLI. Para CLI genéricos, pstack remite a control-cli y control-ui, incluidos en otro plugin, cursor-team-kit.",
			],
			talk: "Charla, de 09:10 a 11:40",
			skillSrc: "create-verification-skill, secciones 2 y 3",
			look: "Los archivos del skill",
			src: "README, create-note y search son los archivos de ejemplo de pstack, completos. pstack no incluye un SKILL.md de ejemplo: este está reconstruido a partir de las instrucciones de create-verification-skill.",
		},
	},
});
