/** English phrase -> Spanish. Spanish is always derived from the English text. */
export const EN_ES: Record<string, string> = {
	"Site source code on GitHub": "Código fuente del sitio en GitHub",
	"Restate your goal and the smallest change": "Reformula tu objetivo y el cambio más pequeño",
	"Pick the playbook": "Elige el playbook",
	"Reflexes active in every flow": "Reflejos activos en cada flujo",
	"Every subagent": "Cada subagente",
	"Trace the code in question": "Rastrea el código en cuestión",
	"Overview, concepts, how it works, where things live, gotchas":
		"Visión general, conceptos, cómo funciona, dónde está cada cosa, trampas",
	"No PR. If code follows: Bug fix or Feature": "Sin PR. Si sigue código: Bug fix o Feature",
	"1. Reproduce it yourself": "1. Reprodúcelo tú mismo",
	"2. Find the cause by elimination": "2. Encuentra la causa por eliminación",
	"Trace the subsystem": "Rastrea el subsistema",
	"Logs and instrumentation, no guessing": "Logs e instrumentación, sin adivinar",
	"3. Plan the fix": "3. Planifica el arreglo",
	"4. Verify on the same surface": "4. Verifica en la misma superficie",
	"5. Failing test before the fix": "5. Test que falla antes del arreglo",
	"1. Trace the subsystem": "1. Rastrea el subsistema",
	"3. Parallelism checkpoint (4 items)": "3. Punto de control de paralelismo (4 puntos)",
	"4. Delegate the code": "4. Delega el código",
	"5. Verify on the real surface": "5. Verifica en la superficie real",
	"6. Small ordered commits": "6. Commits pequeños y ordenados",
	"1. Pin the behavior with a test": "1. Fija el comportamiento con un test",
	"2. Name the missing structure": "2. Nombra la estructura que falta",
	"3. Name the target shape": "3. Nombra la forma objetivo",
	"4. Delete before you add": "4. Borra antes de añadir",
	"5. Small steps, test always green": "5. Pasos pequeños, test siempre en verde",
	"6. Prove nothing changed": "6. Demuestra que nada cambió",
	"7. Is it worth it?": "7. ¿Vale la pena?",
	"1. Name the decision to make": "1. Nombra la decisión que hay que tomar",
	"2. References and moodboard": "2. Referencias y moodboard",
	"3. Throwaway code in a separate folder": "3. Código desechable en una carpeta aparte",
	"4. Variants behind a switch": "4. Variantes detrás de un interruptor",
	"5. Observe each variant": "5. Observa cada variante",
	"6. Recommend": "6. Recomienda",
	"1. Baseline trace": "1. Traza de referencia",
	"2. Hypotheses in mantra order": "2. Hipótesis en el orden del mantra",
	"3. Fix": "3. Arregla",
	"4. Compare before and after": "4. Compara antes y después",
	"1. Realistic case, metric, stop condition": "1. Caso realista, métrica, condición de parada",
	"2. Measurement tool, proven then frozen": "2. Herramienta de medición, probada y luego congelada",
	"4. Hypotheses grounded in the architecture": "4. Hipótesis basadas en la arquitectura",
	"5. Loop: 1 change, 1 measurement, keep or revert": "5. Bucle: 1 cambio, 1 medición, conservar o revertir",
	"6. Push past the first plateau": "6. Ir más allá de la primera meseta",
	"1. Live capture": "1. Captura en vivo",
	"2. Reduce the artifact": "2. Reduce el artefacto",
	"3. Prove the mechanism with instrumentation": "3. Demuestra el mecanismo con instrumentación",
	"4. Map back to file and line": "4. Vuelve al archivo y la línea",
	"Hands back to": "Devuelve el control a",
	"1. Load the capture file": "1. Carga el archivo de captura",
	"2. Convert to sqlite": "2. Convierte a sqlite",
	"3. Query the hot path": "3. Consulta la ruta crítica",
	"4. Map back to source": "4. Vuelve al código fuente",
	"1. Baseline screenshots before migrating": "1. Capturas de referencia antes de migrar",
	"2. Never touch the baseline": "2. Nunca toques la referencia",
	"3. One owner per component": "3. Un responsable por componente",
	"4. Image diff down to zero": "4. Diff de imagen hasta cero",
	"1. 1 or 2 files: no plan": "1. 1 o 2 archivos: sin plan",
	"3. Write the plan: PRs, dependencies, files": "3. Escribe el plan: PRs, dependencias, archivos",
	"4. Unit, live, perf boxes per PR": "4. Casillas unit, live y perf por PR",
	"5. Stop, wait for your go": "5. Para y espera tu visto bueno",
	"Clean worktree, small ordered commits": "Worktree limpio, commits pequeños y ordenados",
	"PR opened ready, never as draft": "PR abierta lista, nunca como borrador",
	"Declare a mode: drive, threads-only or check": "Declara un modo: drive, threads-only o check",
	"Order: conflicts, threads, CI": "Orden: conflictos, hilos, CI",
	"Never rebases or merges": "Nunca hace rebase ni merge",
	"1. One verifier per PR": "1. Un verificador por PR",
	"2. Keep the verified run from the bottom": "2. Conserva la ejecución verificada desde abajo",
	"3. Does the verdict still describe the code?": "3. ¿El veredicto sigue describiendo el código?",
	"4. Merge bottom-up, one at a time": "4. Merge de abajo arriba, de uno en uno",
	"5. Watch": "5. Vigila",
	"6. Stop at the ceiling": "6. Para en el techo",
	"1. Stop condition before starting": "1. Condición de parada antes de empezar",
	"2. Wake-up": "2. Despertar",
	"3. Iterate: change, verify, keep or revert": "3. Itera: cambia, verifica, conserva o revierte",
	"6. Stop at the condition, not at a plateau": "6. Para en la condición, no en una meseta",
	"1. Respect your gates": "1. Respeta tus compuertas",
	"2. One owner per PR, in parallel": "2. Un responsable por PR, en paralelo",
	"5. The owner merges what is verified": "5. El responsable hace merge de lo verificado",
	"6. Lead layer": "6. Capa de supervisión",
	"7. Stop on your order": "7. Para cuando lo ordenes",
	"Stops at verified and green": "Para en verificado y en verde",
	"Stacks a PR only if it depends on another": "Apila una PR solo si depende de otra",
	"1. Read the previous session": "1. Lee la sesión anterior",
	"2. Rebuild the state, redo nothing": "2. Reconstruye el estado, no rehagas nada",
	"3. Compare done and planned": "3. Compara lo hecho y lo previsto",
	"Stop at a clean boundary": "Para en un límite limpio",
	"Cancel subagents": "Cancela los subagentes",
	"Commit wip:": "Commit wip:",
	"Resume note": "Nota de reanudación",
	"Validate frontmatter and links": "Valida el frontmatter y los enlaces",
	"1. Frame, rubric for the judge only": "1. Marco, rúbrica solo para el juez",
	"2. Blind environments": "2. Entornos a ciegas",
	"3. An ordinary user prompt": "3. Un prompt de usuario normal",
	"6. Read the candidates' transcripts": "6. Lee las transcripciones de los candidatos",
	"7. Read every output, synthesize": "7. Lee cada resultado, sintetiza",
	"1. Worktree audit by script": "1. Auditoría de worktrees por script",
	"2. Cross-check with your pinned chats": "2. Contrasta con tus chats fijados",
	"3. Check usage": "3. Comprueba el uso",
	"4. Pause on uncommitted work": "4. Pausa ante trabajo sin commit",
	"5-6. Delete, then simulators and caches": "5-6. Borra, luego simuladores y cachés",
	"A. Frame": "A. Marco",
	"B. Design the phases": "B. Diseña las fases",
	"C. Loop: hypothesis, change, measure": "C. Bucle: hipótesis, cambio, medición",
	"E. Verify on the real product": "E. Verifica en el producto real",
	"Trace everything the change touches": "Rastrea todo lo que toca el cambio",
	"Sketch 2 shapes": "Esboza 2 formas",
	"Keep the simplest for the caller": "Conserva la más simple para quien llama",
	"A. Frame: same prompt, 3 to 6 criteria": "A. Marco: mismo prompt, de 3 a 6 criterios",
	"B. Launch N candidates in parallel": "B. Lanza N candidatos en paralelo",
	"C. Judge from another vendor": "C. Juez de otro proveedor",
	"D. Pick the base criterion by criterion": "D. Elige la base criterio por criterio",
	"E. Graft 1 or 2 ideas from the losers": "E. Injerta 1 o 2 ideas de los perdedores",
	"F. Verify": "F. Verifica",
	"A. Frame: stop condition, slices or race": "A. Marco: condición de parada, porciones o carrera",
	"B. Launch N workers in parallel": "B. Lanza N workers en paralelo",
	"C. Aggregate, rerun once a worker without proof": "C. Agrega, relanza una vez un worker sin prueba",
	"D. One single report": "D. Un único informe",
	"N adversaries in parallel": "N adversarios en paralelo",
	"Rerun each command, keep what is proven": "Relanza cada comando, conserva lo probado",
	"Report: findings and dropped, no fixes": "Informe: hallazgos y descartes, sin arreglos",
	"TSV log: what, why, evidence, result": "Log TSV: qué, por qué, evidencia, resultado",
	"Audit the log against the transcript": "Audita el log contra la transcripción",
	"Triage its deletions, reject overreach": "Clasifica sus borrados, rechaza los excesos",
	"Reads worker.md: no questions to the human, PRs never draft":
		"Lee worker.md: sin preguntas al humano, PRs nunca en borrador",
	"Presents the result as is": "Presenta el resultado tal cual",
	"Read the commits and PRs that introduced the code": "Lee los commits y PRs que introdujeron el código",
	"Cite the authors, flag guesses": "Cita a los autores, marca las suposiciones",
	"Progressive explanation, diagram by diagram": "Explicación progresiva, diagrama a diagrama",
	"Read the diff and what it changes implicitly": "Lee el diff y lo que cambia implícitamente",
	"Find the fact safety depends on": "Encuentra el hecho del que depende la seguridad",
	"Look where grep can't see": "Busca donde grep no ve",
	"Prove that fact with a script": "Demuestra ese hecho con un script",
	"Write the failing test": "Escribe el test que falla",
	"Check it fails for the right reason": "Comprueba que falla por la razón correcta",
	"Smallest fix": "Arreglo mínimo",
	"Rerun: green": "Relanza: verde",
	"What changed since your last message": "Qué cambió desde tu último mensaje",
	"Each decision waiting on you, with a pick": "Cada decisión que te espera, con una propuesta",
	"As a subtitled slide video": "Como un vídeo de diapositivas subtitulado",
	"Set the scope, 7 days by default": "Fija el alcance, 7 días por defecto",
	"Check against git and gh": "Contrasta con git y gh",
	"What limits the number?": "¿Qué limita la cifra?",
	"Settings, errors, repeatability": "Configuración, errores, repetibilidad",
	"Did the work really happen?": "¿El trabajo ocurrió de verdad?",
	"1. Question the repo, not you": "1. Pregunta al repo, no a ti",
	"2. Generate the local skill": "2. Genera el skill local",
	"3. Create the feature map, one file per feature": "3. Crea el feature map, un archivo por feature",
	"4. Prove the skill on the app": "4. Prueba el skill en la app",
	"Tidy the feature map index": "Ordena el índice del feature map",
	"Live pass on every feature": "Pasada en vivo por cada feature",
	"Triage: doc drift, harness gap, real bug": "Clasifica: desfase de doc, hueco del harness, bug real",
	"At most one PR of proven fixes": "Como mucho una PR de arreglos probados",
	"Target: costly bug, blind tests": "Objetivo: bug costoso, tests ciegos",
	"Pick the tool (TLA+, model checker)": "Elige la herramienta (TLA+, model checker)",
	"See each check fail on a broken version": "Mira cada comprobación fallar en una versión rota",
	"Commits touching verified code": "Commits que tocan código verificado",
	"Update model and properties": "Actualiza el modelo y las propiedades",
	"Rerun: drift or real bug?": "Relanza: ¿desfase o bug real?",
	"Write the TLA+ spec and its rules": "Escribe la spec TLA+ y sus reglas",
	"Run the TLC model checker": "Ejecuta el model checker TLC",
	"State diagram and path to each bug": "Diagrama de estados y camino hasta cada bug",
	"Replay each bug on the real code": "Reproduce cada bug en el código real",
	"Find repeated mistakes, 2 times = a class": "Encuentra errores repetidos, 2 veces = una clase",
	"Architecture, then types, then lint, then test, docs last":
		"Arquitectura, luego tipos, luego lint, luego test, la doc al final",
	"Prove each check fails on a real mistake": "Demuestra que cada comprobación falla ante un error real",
	"Table of rules and what enforces them": "Tabla de reglas y de lo que las hace cumplir",
	"Read the whole transcript": "Lee toda la transcripción",
	"Keep durable lessons": "Conserva las lecciones duraderas",
	"Propose skill edits, wait for your OK": "Propón cambios a los skills, espera tu OK",
	"Look for an existing <you>-mode": "Busca un <you>-mode existente",
	"Detect available models": "Detecta los modelos disponibles",
	"Write the model and budget rule per role": "Escribe la regla de modelo y presupuesto por rol",
	"Read by arena, swarm, interrogate and playbooks": "La leen arena, swarm, interrogate y los playbooks",
	"Answers your questions about pstack": "Responde a tus preguntas sobre pstack",
	"Suggests the right skill, playbook or principle": "Sugiere el skill, playbook o principio adecuado",
	"Copies the pack into the repo": "Copia el pack en el repo",
	"Enables pstack in the repo": "Activa pstack en el repo",
	"Triage each Slack report": "Clasifica cada reporte de Slack",
	"Write the triage contract": "Escribe el contrato de triaje",
	"Control adapter and feature map": "Adaptador de control y feature map",
	"Reproduce twice, video and screenshot": "Reproduce dos veces, vídeo y captura",
	"Root cause and bounded fix": "Causa raíz y arreglo acotado",
	"Prove the fix twice on the same UI": "Prueba el arreglo dos veces en la misma UI",
	"Open a draft PR": "Abre una PR en borrador",
	"You want to understand": "Quieres entender",
	"Big project": "Gran proyecto",
	"Before shipping": "Antes de entregar",
	"You're back": "Has vuelto",
	"Once per project": "Una vez por proyecto",
	"Then /verify-<app> is used by": "Después, /verify-<app> lo usan",
	"Improve the system": "Mejorar el sistema",
	"nothing fits, or big project": "nada encaja, o gran proyecto",
	"code crossing a function boundary": "código que cruza un límite de función",
	"parallelizable work": "trabajo paralelizable",
	"compare versions": "comparar versiones",
	"contested design": "diseño discutido",
	"a choice a test can settle": "una elección que un test puede zanjar",
	"any text": "cualquier texto",
	"docs, PRs, commits": "docs, PRs, commits",
	"before commit": "antes del commit",
	"before review": "antes de la revisión",
	"measured number": "cifra medida",
	"PR status": "estado de la PR",
	"long or unattended work": "trabajo largo o desatendido",
	"reads worker.md first": "lee worker.md primero",
	"if the question is “why”": "si la pregunta es “por qué”",
	"regression history": "historial de regresiones",
	"if the hunt is long": "si la búsqueda es larga",
	"if 2 fixes fail the same way": "si 2 arreglos fallan igual",
	"if the fix crosses a function boundary": "si el arreglo cruza un límite de función",
	"if the mechanism needs challenging": "si hay que cuestionar el mecanismo",
	"writes the fix": "escribe el arreglo",
	"if a cheap test exists": "si existe un test barato",
	"2. the shape of the code": "2. la forma del código",
	"normal case": "caso normal",
	"if several shapes are valid, mandatory": "si varias formas son válidas, obligatorio",
	"7. if the design is contested": "7. si el diseño se discute",
	"if the target crosses a function boundary": "si el objetivo cruza un límite de función",
	"mechanical edits": "ediciones mecánicas",
	"for big changes": "para cambios grandes",
	"otherwise revert": "si no, revertir",
	"8. deletion, then reshape": "8. borrar, luego remodelar",
	"if big or cross-cutting": "si es grande o transversal",
	"screenshots, interaction": "capturas, interacción",
	"real build": "build real",
	"or just the shape": "o solo la forma",
	"5-6. with the number": "5-6. con la cifra",
	"for continuous improvement": "para mejora continua",
	"3. decision.tsv, 1 row per attempt": "3. decision.tsv, 1 fila por intento",
	"mantra order": "orden del mantra",
	"one per hypothesis, parallel possible": "una por hipótesis, se puede en paralelo",
	"only its wake-up, if you're away": "solo su despertar, si no estás",
	"8. winning commits stacked": "8. commits ganadores apilados",
	"CPU profile, heap, trace": "perfil de CPU, heap, traza",
	"if large": "si es grande",
	"1 worktree each": "1 worktree cada uno",
	"5. per component": "5. por componente",
	"2. settle open questions": "2. zanja las preguntas abiertas",
	"reflex before review": "reflejo antes de la revisión",
	"title and description": "título y descripción",
	"watches the PR": "vigila la PR",
	"bot comments": "comentarios de bots",
	"did not write the code": "no escribió el código",
	"watcher on CI or merge": "vigilante de CI o de merge",
	"4. fixes side issues on the way": "4. arregla problemas secundarios por el camino",
	"5. one row per iteration": "5. una fila por iteración",
	"opened early": "abierta pronto",
	"until green": "hasta el verde",
	"log in the lead's store": "log en el almacén del supervisor",
	"4. verification, once at the ready head": "4. verificación, una vez en la cabeza lista",
	"audit every hour": "auditoría cada hora",
	"if something changes for you": "si algo cambia para ti",
	"everything but the merge": "todo salvo el merge",
	"if the transcript is long": "si la transcripción es larga",
	"4. route the rest": "4. enruta el resto",
	"5. verify what was inherited": "5. verifica lo heredado",
	"or point to its log": "o apunta a su log",
	"4-5. phase B candidates, phase C judge": "4-5. candidatos de la fase B, juez de la fase C",
	"reads the transcripts": "lee las transcripciones",
	"read its Principles first": "lee primero sus Principios",
	"stop condition": "condición de parada",
	"one-way decisions": "decisiones de ida sin vuelta",
	"D. log, often committed": "D. log, a menudo en commit",
	"if the design is big or contested": "si el diseño es grande o discutido",
	"Fable, Opus, Gemini": "Fable, Opus, Gemini",
	"if tied": "en caso de empate",
	"PASS, ISSUES or BLOCKED": "PASS, ISSUES o BLOCKED",
	"restate the intent": "reformula la intención",
	"reuses its phases A and B": "reutiliza sus fases A y B",
	"break this change, prove it with a command": "rompe este cambio, pruébalo con un comando",
	"other vendor, Attention section": "otro proveedor, sección Atención",
	"removes useless comments": "elimina los comentarios inútiles",
	"if a “do not remove” looks doubtful": "si un “no borrar” parece dudoso",
	"if a fix needs a new shape": "si un arreglo necesita una forma nueva",
	"check a justification": "comprobar una justificación",
	"rereads SKILL.md in full": "relee SKILL.md entero",
	"read-only, explores and explains": "solo lectura, explora y explica",
	"in parallel": "en paralelo",
	"if the change is big": "si el cambio es grande",
	"its voice: plain words": "su voz: palabras sencillas",
	"same content": "mismo contenido",
	"N in parallel over your chats": "N en paralelo sobre tus chats",
	"one per source: git, tickets, Slack, errors": "uno por fuente: git, tickets, Slack, errores",
	"final brief": "resumen final",
	"5. offer maintenance": "5. ofrece mantenimiento",
	"one reader per feature, in parallel": "un lector por feature, en paralelo",
	"if TLA+": "si TLA+",
	"after changes": "después de cambios",
	"3 in parallel over your transcripts": "3 en paralelo sobre tus transcripciones",
	"if the bug is confirmed": "si el bug se confirma",
	"same idea": "misma idea",
	"“explain X”": "“explícame X”",
	"“how does it work”": "“cómo funciona”",
	"“why is it like this”": "“por qué es así”",
	"“make me understand”": "“hazme entender”",
	"“what could this change break”": "“qué podría romper este cambio”",
	"“did you get my request”": "“¿entendiste mi petición?”",
	"“improve my prompt”": "“mejora mi prompt”",
	"“say it simply”": "“dilo de forma simple”",
	"plan only": "solo el plan",
	"break the change": "romper el cambio",
	"what breaks elsewhere": "qué se rompe en otro sitio",
	"clean up comments": "limpiar comentarios",
	"“sum up the night”": "“resume la noche”",
	"“what changed”": "“qué cambió”",
	"“where was I”": "“dónde me quedé”",
	"resume a session": "retomar una sesión",
	"create a skill": "crear un skill",
	"recurring mistake": "error recurrente",
	"end of session": "fin de sesión",
	"your <you>-mode": "tu <you>-mode",
	"models per role": "modelos por rol",
	"test a variant": "probar una variante",
	"need help": "necesito ayuda",
	"free disk space": "liberar espacio en disco",
	"if the space is open": "si el espacio está abierto",
	"don't do it, don't redo it, less, later, concurrently, cheaper":
		"no lo hagas, no lo rehagas, menos, más tarde, en paralelo, más barato",
	"git patch-id": "git patch-id",
	"pstack skill": "Skill de pstack",
	"Your project's skill": "Skill de tu proyecto",
	"Cursor, outside pstack": "Cursor, fuera de pstack",
	"Script or reference": "Script o referencia",
	"Benny automation": "Automatización Benny",
	"Answer a question about the code, read-only. Produces a cited explanation or a recommendation, never a code change.":
		"Responde a una pregunta sobre el código, solo lectura. Produce una explicación con citas o una recomendación, nunca un cambio de código.",
	"Fix a bug scientifically: reproduce, find the cause by elimination, fix only what the evidence justifies, prove it on the same surface.":
		"Arregla un bug con método científico: reproducir, encontrar la causa por eliminación, arreglar solo lo que la evidencia justifica, probarlo en la misma superficie.",
	"Add a behavior. You keep the design, a subagent writes the code, you verify on the real app.":
		"Añade un comportamiento. Tú mantienes el diseño, un subagente escribe el código, tú verificas en la app real.",
	"Change the structure without changing behavior. Pin the behavior with a test first, then move in small steps.":
		"Cambia la estructura sin cambiar el comportamiento. Primero fija el comportamiento con un test, luego avanza en pasos pequeños.",
	"Build throwaway code to settle a design choice. The result is a decision, not code to ship.":
		"Construye código desechable para zanjar una elección de diseño. El resultado es una decisión, no código para entregar.",
	"Fix a one-off slowness. Every fix is tied to a before and after measurement.":
		"Arregla una lentitud puntual. Cada arreglo va ligado a una medición de antes y después.",
	"Improve a number in a loop: one change, one measurement, keep or revert. Can run several attempts in parallel.":
		"Mejora una cifra en bucle: un cambio, una medición, conservar o revertir. Puede lanzar varios intentos en paralelo.",
	"Diagnose a live process (spinning CPU, memory leak) by capturing a real profile. Delivers a diagnosis, not a fix.":
		"Diagnostica un proceso en vivo (CPU disparada, fuga de memoria) capturando un perfil real. Entrega un diagnóstico, no un arreglo.",
	"Diagnose from an existing capture file, converted to sqlite to query it.":
		"Diagnostica a partir de un archivo de captura existente, convertido a sqlite para consultarlo.",
	"Migrate components without changing a pixel. The proof is an image diff of zero.":
		"Migra componentes sin cambiar un píxel. La prueba es un diff de imagen igual a cero.",
	"Write a plan of several PRs, each with its own proof. Delivers only the plan, execution waits for your go.":
		"Escribe un plan de varias PRs, cada una con su prueba. Entrega solo el plan, la ejecución espera tu visto bueno.",
	"Called at the end of almost every playbook. Small commits, cleanup, type(scope) title, short description with fixed headings.":
		"Se llama al final de casi todos los playbooks. Commits pequeños, limpieza, título type(scope), descripción corta con secciones fijas.",
	"Push a PR to green: conflicts, then review threads, then CI. Never rebases, never merges.":
		"Lleva una PR al verde: conflictos, luego hilos de revisión, luego CI. Nunca hace rebase, nunca hace merge.",
	"Merge a stack of PRs. Each PR is verified by an agent that did not write the code, then merged bottom-up.":
		"Hace merge de una pila de PRs. Cada PR la verifica un agente que no escribió el código, y luego se hace merge de abajo arriba.",
	"Work without you until a checkable stop condition. Wakes itself up, logs every iteration.":
		"Trabaja sin ti hasta una condición de parada comprobable. Se despierta solo y registra cada iteración.",
	"Handle a queue of PRs in parallel, from build to merge. One agent per PR, a verification swarm, an hourly audit. The heaviest part of pstack.":
		"Gestiona una cola de PRs en paralelo, de la construcción al merge. Un agente por PR, un swarm de verificación, una auditoría cada hora. La parte más pesada de pstack.",
	"Like Autopilot-full, but stops at “verified and green”. You do the merging.":
		"Como Autopilot-full, pero se detiene en “verificado y en verde”. El merge lo haces tú.",
	"Resume a previous session's work without redoing what is done.":
		"Retoma el trabajo de una sesión anterior sin rehacer lo hecho.",
	"Stop cleanly: wip commit and resume note. Only when you ask.":
		"Para limpiamente: commit wip y nota de reanudación. Solo cuando lo pides.",
	"Create or change a skill, validate it, open a PR.": "Crea o modifica un skill, lo valida y abre una PR.",
	"Test whether a skill variant does better. Blind candidates on several models, a blind judge, transcript reading.":
		"Prueba si una variante de skill funciona mejor. Candidatos a ciegas en varios modelos, un juez a ciegas, lectura de transcripciones.",
	"Free disk space by removing unused worktrees and simulators, after checking no chat uses them.":
		"Libera espacio en disco eliminando worktrees y simuladores sin uso, tras comprobar que ningún chat los usa.",
	"The router. It restates your goal, picks the matching playbook, copies its steps into the todo list and applies reflexes in every flow.":
		"El router. Reformula tu objetivo, elige el playbook que corresponde, copia sus pasos en la lista de tareas y aplica reflejos en cada flujo.",
	"When no playbook fits: it designs a custom playbook, runs it as a hypothesis loop and leaves an auditable log.":
		"Cuando ningún playbook encaja: diseña un playbook a medida, lo ejecuta como un bucle de hipótesis y deja un log auditable.",
	"Sketch types, signatures and modules before coding. Two shapes, keep the simpler. Switches to arena if the design is big or contested.":
		"Esboza tipos, firmas y módulos antes de programar. Dos formas, se queda con la más simple. Pasa a arena si el diseño es grande o discutido.",
	"Run N candidates on the same task, have a judge from another vendor score them, keep the best base and graft in the others' good ideas.":
		"Lanza N candidatos en la misma tarea, un juez de otro proveedor los puntúa, se queda con la mejor base e injerta las buenas ideas de los demás.",
	"Run N workers in parallel (slices or a race), collect their results and return one report.":
		"Lanza N workers en paralelo (porciones o carrera), reúne sus resultados y devuelve un solo informe.",
	"Adversarial agents try to break your change. Only problems proven by a command survive. Fixes nothing.":
		"Agentes adversarios intentan romper tu cambio. Solo sobreviven los problemas probados por un comando. No arregla nada.",
	"“How does it work?” A read-only subagent explores the code and writes an architecture explanation.":
		"“¿Cómo funciona?” Un subagente de solo lectura explora el código y escribe una explicación de la arquitectura.",
	"“Why is it like this?” Reads the commit and PR history, cites the authors, separates facts from guesses.":
		"“¿Por qué es así?” Lee el historial de commits y PRs, cita a los autores, separa hechos de suposiciones.",
	"Make you really understand a topic. Runs how and why in parallel and builds a progressive explanation.":
		"Te hace entender de verdad un tema. Lanza how y why en paralelo y construye una explicación progresiva.",
	"What a change could break outside the diff. Finds the one fact safety depends on and proves it with a script.":
		"Lo que un cambio podría romper fuera del diff. Encuentra el hecho del que depende la seguridad y lo demuestra con un script.",
	"Restates your goal and problem, to check the agent understood.":
		"Reformula tu objetivo y tu problema, para comprobar que el agente entendió.",
	"Rewrites your prompt for a deeper task, not a bigger one.":
		"Reescribe tu prompt para una tarea más profunda, no más grande.",
	"Repeats the last answer in plain words, no jargon.": "Repite la última respuesta en palabras sencillas, sin jerga.",
	"Write a failing test first, then the fix. Only when a cheap test exists.":
		"Primero un test que falla, luego el arreglo. Solo cuando existe un test barato.",
	"Removes AI writing tics from a text. Applied to all prose, replies included.":
		"Quita los tics de escritura de IA de un texto. Se aplica a toda la prosa, respuestas incluidas.",
	"Writing standard for docs, PR descriptions and commit messages.":
		"Norma de escritura para docs, descripciones de PR y mensajes de commit.",
	"Runs Comment Sicko on the diff, applies its valid deletions and offers to encode real constraints as types or lint.":
		"Pasa Comment Sicko por el diff, aplica sus borrados válidos y propone convertir las restricciones reales en tipos o lint.",
	"Check that a perf measurement means something before trusting or reporting it.":
		"Comprueba que una medición de rendimiento significa algo antes de fiarse de ella o reportarla.",
	"Keep a decision log (TSV) for long or unattended work. A model from another vendor reviews the log at the end.":
		"Lleva un log de decisiones (TSV) para trabajo largo o desatendido. Un modelo de otro proveedor revisa el log al final.",
	"Catch you up on what changed since your last message, with each decision waiting on you.":
		"Te pone al día de lo que cambió desde tu último mensaje, con cada decisión que te espera.",
	"Like ketchup, as a short subtitled slide video.": "Como ketchup, en un vídeo corto de diapositivas subtitulado.",
	"Rebuild where you were on a topic from your chats and everything else (git, tickets, Slack). Several subagents in parallel.":
		"Reconstruye dónde estabas en un tema a partir de tus chats y de todo lo demás (git, tickets, Slack). Varios subagentes en paralelo.",
	"Generate the local skill that drives your app like a person, plus its feature map.":
		"Genera el skill local que maneja tu app como una persona, más su feature map.",
	"Periodic pass that brings the feature map and verification skill back in line with the code. One reader per feature.":
		"Pasada periódica que vuelve a alinear el feature map y el skill de verificación con el código. Un lector por feature.",
	"Generate a skill that formally proves an invariant where a bug is costly and tests see poorly.":
		"Genera un skill que demuestra formalmente un invariante donde un bug sale caro y los tests ven mal.",
	"Bring the formal model back in line with the code after changes, and say whether a failure is drift or a real bug.":
		"Vuelve a alinear el modelo formal con el código tras cambios, y dice si un fallo es un desfase o un bug real.",
	"Check a TLA+ model and draw it as a state diagram. Gives the shortest path to each state that breaks a rule.":
		"Comprueba un modelo TLA+ y lo dibuja como diagrama de estados. Da el camino más corto a cada estado que rompe una regla.",
	"Make a mistake agents keep repeating impossible: architecture, then types, then lint, then test, docs last.":
		"Hace imposible un error que los agentes repiten: arquitectura, luego tipos, luego lint, luego test, la doc al final.",
	"Extract durable lessons from a session and propose edits to existing skills.":
		"Extrae lecciones duraderas de una sesión y propone cambios a skills existentes.",
	"Create your own “<you>-mode” skill from your past transcripts.":
		"Crea tu propio skill “<you>-mode” a partir de tus transcripciones pasadas.",
	"Choose which model and budget to use per role. Writes a rule the other skills read.":
		"Elige qué modelo y qué presupuesto usar por rol. Escribe una regla que leen los demás skills.",
	"Guides you through pstack and suggests the right skill or playbook for your question.":
		"Te guía por pstack y sugiere el skill o playbook adecuado para tu pregunta.",
	"The subagent that writes code in playbooks. It rereads poteto-mode and worker.md before working.":
		"El subagente que escribe el código en los playbooks. Relee poteto-mode y worker.md antes de trabajar.",
	"A subagent that hates comments. Deletes narration, commented-out code and workaround justifications. Doesn't touch code.":
		"Un subagente que odia los comentarios. Borra la narración, el código comentado y las justificaciones de apaños. No toca el código.",
	"An agent launched in the background for a precise task (read, explore, verify). Each launch costs tokens.":
		"Un agente lanzado en segundo plano para una tarea precisa (leer, explorar, verificar). Cada lanzamiento cuesta tokens.",
	"A remote agent, one per PR, that builds or verifies. Cursor-specific.":
		"Un agente remoto, uno por PR, que construye o verifica. Específico de Cursor.",
	"Your project's verification skill (e.g. /verify-terms-era), generated by create-verification-skill. It is the “real surface” where playbooks prove their work.":
		"El skill de verificación de tu proyecto (p. ej. /verify-terms-era), generado por create-verification-skill. Es la “superficie real” donde los playbooks prueban su trabajo.",
	"Cursor command that reruns the agent on an interval or on an event. Claude Code has a /loop too.":
		"Comando de Cursor que relanza el agente a intervalos o ante un evento. Claude Code también tiene un /loop.",
	"Skill from the cursor-team-kit plugin that cleans code before commit. Not part of pstack.":
		"Skill del plugin cursor-team-kit que limpia el código antes del commit. No forma parte de pstack.",
	"Cursor built-in skill for writing a SKILL.md. Claude side: skill-creator.":
		"Skill integrado de Cursor para escribir un SKILL.md. En Claude: skill-creator.",
	"TypeScript script shipped with poteto-mode that watches a GitHub PR's state.":
		"Script TypeScript incluido con poteto-mode que vigila el estado de una PR de GitHub.",
	"Reference for triaging review-bot comments: fix the real ones, disprove the noise.":
		"Referencia para clasificar los comentarios de bots de revisión: arreglar los reales, refutar el ruido.",
	"Installs the Benny automations in the target repo.": "Instala las automatizaciones Benny en el repo objetivo.",
	"Automation: triages each bug report posted on Slack.":
		"Automatización: clasifica cada reporte de bug publicado en Slack.",
	"Automation: reproduces a confirmed bug on the real UI, fixes it if bounded, opens a draft PR.":
		"Automatización: reproduce un bug confirmado en la UI real, lo arregla si está acotado y abre una PR en borrador.",
	"Bias toward deletion and the smallest change that solves the problem.":
		"Tendencia a borrar y al cambio más pequeño que resuelve el problema.",
	"Think about types and data structures before writing logic.":
		"Piensa en tipos y estructuras de datos antes de escribir lógica.",
	"Integrate a new requirement as if it had existed from day one.":
		"Integra un requisito nuevo como si hubiera existido desde el primer día.",
	"Two fixes failed for the same reason: test the shared premise directly.":
		"Dos arreglos fallaron por la misma razón: pon a prueba directamente la premisa común.",
	"Remove dead weight before building.": "Quita el peso muerto antes de construir.",
	"Fewer layers and less hidden state for whoever reads the code.":
		"Menos capas y menos estado oculto para quien lee el código.",
	"Aim for the target architecture, no throwaway compatibility states.":
		"Apunta a la arquitectura objetivo, sin estados de compatibilidad desechables.",
	"Choose user delight over implementation convenience.":
		"Elige el placer del usuario antes que la comodidad de implementación.",
	"Build 2 or 3 competing prototypes before choosing.": "Construye 2 o 3 prototipos rivales antes de elegir.",
	"Build the tool (script, codemod) rather than doing it by hand.":
		"Construye la herramienta (script, codemod) en vez de hacerlo a mano.",
	"Encode the domain in a structure: state machine, table, type.":
		"Codifica el dominio en una estructura: máquina de estados, tabla, tipo.",
	"Validate at system boundaries, keep business logic pure.":
		"Valida en los límites del sistema, mantén pura la lógica de negocio.",
	"Make illegal states impossible to write.": "Haz que los estados ilegales sean imposibles de escribir.",
	"Rerunning a step gives the same end state.": "Relanzar un paso da el mismo estado final.",
	"Migrate all callers and delete the old API in one wave.":
		"Migra todas las llamadas y borra la API antigua de una sola vez.",
	"Remove sharing (one worktree per agent) before serializing access.":
		"Elimina lo compartido (un worktree por agente) antes de serializar el acceso.",
	"Verify on the real artifact, not “it compiles”.": "Verifica en el artefacto real, no en “compila”.",
	"Trace back to the first place the system went wrong and fix it there.":
		"Remonta hasta el primer punto donde el sistema falló y arréglalo ahí.",
	"Split into small units that each end with a check.":
		"Divide en unidades pequeñas que terminan cada una con una comprobación.",
	"Test what the user observes, not internal details.": "Prueba lo que observa el usuario, no los detalles internos.",
	"Understand what limits a number before believing it.": "Entiende qué limita una cifra antes de creerla.",
	"Send bulk to subagents, keep the summaries.": "Manda el grueso a subagentes, quédate con los resúmenes.",
	"On reversible work, do it and show it, rather than asking.":
		"En trabajo reversible, hazlo y muéstralo en lugar de preguntar.",
	"A repeated instruction becomes a lint, a script or a check.":
		"Una instrucción repetida se convierte en un lint, un script o una comprobación.",
	"generic subagent": "subagente genérico",
	"Cursor cloud agent": "Agente en la nube de Cursor",
	"The /poteto-mode router": "El router /poteto-mode",
	"You don't know which skill to use. Type /poteto-mode and your request, it picks for you.":
		"No sabes qué skill usar. Escribe /poteto-mode y tu petición, él elige por ti.",
	"Understand code": "Entender el código",
	"You want to understand without changing anything. Go through the router, or call the right skill directly.":
		"Quieres entender sin cambiar nada. Pasa por el router o llama directamente al skill adecuado.",
	"I have a bug": "Tengo un bug",
	"Something behaves wrong. Reproduce first, fix next, prove on the same surface.":
		"Algo se comporta mal. Primero reproducir, luego arreglar, y probarlo en la misma superficie.",
	"I'm adding a feature": "Añado una feature",
	"You add a behavior. You keep the design, a subagent writes the code.":
		"Añades un comportamiento. Tú mantienes el diseño, un subagente escribe el código.",
	"I'm restructuring code": "Reestructuro código",
	"The structure changes, the behavior doesn't. If it's big or cross-cutting, it goes to figure-it-out.":
		"La estructura cambia, el comportamiento no. Si es grande o transversal, pasa a figure-it-out.",
	"I need to pick a design": "Tengo que elegir un diseño",
	"Several options. Build throwaway code to compare. poteto-mode also goes there on its own when a test can settle it.":
		"Varias opciones. Se construye código desechable para comparar. poteto-mode también va ahí solo cuando un test puede zanjarlo.",
	"It's slow": "Va lento",
	"A one-off slowness to fix, measured before and after.":
		"Una lentitud puntual que arreglar, medida antes y después.",
	"Improve a number in a loop": "Mejorar una cifra en bucle",
	"You want to push a metric to a target, attempt by attempt.":
		"Quieres llevar una métrica hasta un objetivo, intento a intento.",
	"Diagnose a process": "Diagnosticar un proceso",
	"A process misbehaves (CPU, memory) or you already have a capture file. Delivers a diagnosis, then hands back.":
		"Un proceso se descontrola (CPU, memoria) o ya tienes un archivo de captura. Entrega un diagnóstico y te devuelve el control.",
	"Migrate without changing a pixel": "Migrar sin cambiar un píxel",
	"You change how components are built, the look must stay identical.":
		"Cambias cómo se construyen los componentes, el aspecto debe quedar idéntico.",
	"Either you only want a PR plan, or you want to run it when no playbook fits.":
		"O solo quieres un plan de PRs, o quieres ejecutarlo cuando ningún playbook encaja.",
	"Challenge before shipping": "Desafiar antes de entregar",
	"You want someone to look for flaws in your change before the PR.":
		"Quieres que alguien busque fallos en tu cambio antes de la PR.",
	"Open, watch, merge": "Abrir, vigilar, hacer merge",
	"A PR's life: open it, push it to green, merge the verified stack.":
		"La vida de una PR: abrirla, llevarla al verde, hacer merge de la pila verificada.",
	"A task overnight": "Una tarea de noche",
	"You leave. The agent keeps going until a checkable stop condition.":
		"Te vas. El agente sigue hasta una condición de parada comprobable.",
	"A PR queue on autopilot": "Una cola de PRs en piloto automático",
	"Several independent changes, handled in parallel until merge (or until verified).":
		"Varios cambios independientes, gestionados en paralelo hasta el merge (o hasta la verificación).",
	"Come back, resume, pause": "Volver, retomar, pausar",
	"You're back and want to know where things stand, resume a session, or pause everything.":
		"Has vuelto y quieres saber cómo va todo, retomar una sesión o ponerlo todo en pausa.",
	"Set up verification": "Montar la verificación",
	"Once per project (e.g. terms-era). The resulting skill is then used by almost every playbook.":
		"Una vez por proyecto (p. ej. terms-era). El skill resultante lo usan luego casi todos los playbooks.",
	"Prove an invariant": "Demostrar un invariante",
	"A race condition or a rule that must never break. Prove it formally.":
		"Una condición de carrera o una regla que nunca debe romperse. Se demuestra formalmente.",
	"Automated Slack bugs": "Bugs de Slack automatizados",
	"Cursor automations (not slash skills): each Slack report is triaged, then reproduced and fixed.":
		"Automatizaciones de Cursor (no son slash skills): cada reporte de Slack se clasifica, luego se reproduce y se arregla.",
	"Create skills, make a mistake impossible, keep lessons, configure models.":
		"Crear skills, hacer imposible un error, conservar lecciones, configurar modelos.",
	"Start here": "Empieza aquí",
	"Without you": "Sin ti",
	"Getting started": "Primeros pasos",
	"Use cases": "Casos de uso",
	"API reference": "Referencia API",
	"Next step": "Siguiente paso",
	"Next lesson": "Siguiente lección",
	"Go to use cases": "Ir a los casos de uso",
	"Type this": "Escribe esto",
	"recipe (playbook)": "receta (playbook)",
	"Tap a chip to see what it does.": "Toca una pastilla para ver qué hace.",
	"Expand all": "Desplegar todo",
	"Click a row to expand it and read what it does.": "Haz clic en una fila para desplegarla y leer qué hace.",
	"It calls": "Llama a",
	"Called by": "Llamado por",
	"In use cases": "En los casos de uso",
	"Step of": "Paso de",
	"See its call tree": "Ver su árbol de llamadas",
	"See in the reference": "Ver en la referencia",
	"One card per situation. Open it to see the recipes used, their steps and the skills called at each step. Click a skill to read what it does.":
		"Una tarjeta por situación. Ábrela para ver las recetas usadas, sus pasos y los skills llamados en cada paso. Haz clic en un skill para leer qué hace.",
	"Landmarks for reading the reference: token cost, vocabulary, and what is Cursor-specific.":
		"Referencias para leer la documentación: coste en tokens, vocabulario y lo que es específico de Cursor.",
	"Everything in pstack: skills, playbooks, agents, principles. Search, filter, sort, then click a row for its details.":
		"Todo lo que contiene pstack: skills, playbooks, agentes, principios. Busca, filtra, ordena y haz clic en una fila para ver su ficha.",
	"Search a skill…": "Buscar un skill…",
	"All types": "Todos los tipos",
	"All costs": "Todos los costes",
	"Sort: name": "Ordenar: nombre",
	"Sort: cost high to low": "Ordenar: coste de mayor a menor",
	"Sort: cost low to high": "Ordenar: coste de menor a mayor",
	"Sort: type": "Ordenar: tipo",
	"What it does": "Qué hace",
	"Clear filters": "Borrar filtros",
	"Each arrow means “calls”. Click a node for its details, scroll or pinch to zoom. Principles only show when you filter on Principle.":
		"Cada flecha significa “llama a”. Haz clic en un nodo para ver su ficha, rueda o pellizco para hacer zoom. Los principios solo aparecen si filtras por Principio.",
	"No results.": "Sin resultados.",
	"How to read token cost": "Cómo leer el coste en tokens",
	"The catch: architect looks light, but it calls arena as soon as the design is “big or contested”. Feature also calls arena by default when several code shapes are valid. A medium flow can turn heavy without warning.":
		"La trampa: architect parece ligero, pero llama a arena en cuanto el diseño es “grande o discutido”. Feature también llama a arena por defecto cuando varias formas de código son válidas. Un flujo medio puede volverse pesado sin avisar.",
	"No subagent, or almost none. Reading, rewriting, rules.": "Sin subagente, o casi. Lectura, reescritura, reglas.",
	"One or two subagents.": "Uno o dos subagentes.",
	"Several agents in parallel (3 by default for arena and interrogate, N for swarm), or a long loop.":
		"Varios agentes en paralelo (3 por defecto para arena e interrogate, N para swarm), o un bucle largo.",
	"Very heavy": "Muy pesado",
	"One agent per PR, a verification swarm, an hourly audit.":
		"Un agente por PR, un swarm de verificación, una auditoría cada hora.",
	"What is Cursor-specific": "Lo que es específico de Cursor",
	"Items of type “Cursor, outside pstack”. For a workflow that runs on Claude Code and Codex, each needs an equivalent or must go.":
		"Elementos del tipo “Cursor, fuera de pstack”. Para un workflow que funcione con Claude Code y Codex, cada uno necesita un equivalente o hay que quitarlo.",
	"In pstack": "En pstack",
	"What it is": "Qué es",
	"Equivalent to plan": "Equivalente a prever",
	"Learn pstack": "Aprender pstack",
	"unofficial guide": "guía no oficial",
	"Unofficial guide": "Guía no oficial",
	"My notes to understand pstack": "Mis notas para entender pstack",
	'<a href="https://github.com/cursor/plugins/tree/main/pstack" target="_blank" rel="noopener">pstack</a> is the skill kit <b><a href="https://x.com/poteto" target="_blank" rel="noopener">Lauren Tan (poteto)</a></b> built to ship quality code with agents. This site is only a summary: to learn pstack, I asked Claude to read its code and her talks, then turn them into lessons, situations and a reference.':
		'<a href="https://github.com/cursor/plugins/tree/main/pstack" target="_blank" rel="noopener">pstack</a> es el kit de skills que <b><a href="https://x.com/poteto" target="_blank" rel="noopener">Lauren Tan (poteto)</a></b> creó para entregar código de calidad con agentes. Este sitio es solo un resumen: para aprender pstack, le pedí a Claude que leyera su código y sus charlas, y que los convirtiera en lecciones, situaciones y una referencia.',
	"All the credit goes to its author. Nothing here is made up: every item points to a file in the repository or to a source.":
		"Todo el mérito es de su autora. Nada aquí es inventado: cada elemento apunta a un archivo del repositorio o a una fuente.",
	"Start the path": "Empezar el recorrido",
	"Open the reference": "Abrir la referencia",
	"lessons to discover the pieces of pstack": "lecciones para descubrir las piezas de pstack",
	"situations, from a bug to a big project": "situaciones, de un bug a un gran proyecto",
	"skills, playbooks, agents and principles in the catalog": "skills, playbooks, agentes y principios en el catálogo",
	"GitHub contributions shown in the talk (around 2:30).":
		"Contribuciones de GitHub mostradas en la charla (hacia el 2:30).",
	"Benny, an automation agent, reproduces a bug reported on Slack (around 35:00).":
		"Benny, un agente de automatización, reproduce un bug reportado en Slack (hacia el 35:00).",
	"Why this approach interests me": "Por qué me interesa este enfoque",
	"The PR volume is huge, and the talk credits one thing for it: an environment where you can trust your agents. That method is what interests me, more than the numbers.":
		"El volumen de PRs es enorme, y la charla lo atribuye a una sola cosa: un entorno en el que puedes confiar en tus agentes. Es ese método lo que me interesa, más que las cifras.",
	"PRs shipped to production the month of the talk": "PRs en producción el mes de la charla",
	"PRs in six months, per her talk": "PRs en seis meses, según su charla",
	"playbooks behind /poteto-mode": "playbooks detrás de /poteto-mode",
	"levels where a correction can live": "niveles donde puede vivir una corrección",
	"What this site is for": "Para qué sirve este sitio",
	"A pstack reference to keep open": "Una referencia de pstack para tener abierta",
	"The author already explains a lot in her X threads and in the repository. This site doesn't replace those sources: it gathers them in a form you can browse.":
		"La autora ya explica mucho en sus hilos de X y en el repositorio. Este sitio no sustituye esas fuentes: las reúne en un formato que se puede recorrer.",
	"Find the right playbook": "Encontrar el playbook adecuado",
	"For each situation, the command to type, the steps and the skills it calls.":
		"Para cada situación, el comando que escribir, los pasos y los skills que llama.",
	"See what each skill calls": "Ver a quién llama cada skill",
	"Who calls what, with the call graph and a link to every file in the repository.":
		"Quién llama a qué, con el grafo de llamadas y un enlace a cada archivo del repositorio.",
	"Estimate token cost": "Estimar el coste en tokens",
	"Every item has a cost level, so you know when a flow starts several agents.":
		"Cada elemento tiene un nivel de coste, para saber cuándo un flujo lanza varios agentes.",
	"Spot what is Cursor-specific": "Detectar lo específico de Cursor",
	"The pieces to replace to use pstack with Claude Code or Codex.":
		"Las piezas que hay que sustituir para usar pstack con Claude Code o Codex.",
	"The ideas from the talk": "Las ideas de la charla",
	"Speed comes from trust": "La velocidad viene de la confianza",
	"These ideas come from the talk, not from me. Each block points to the part where they are explained. The talk is not about shipping more: it is about setting up the agents' environment so they do good work even when you're not there.":
		"Estas ideas vienen de la charla, no de mí. Cada bloque apunta al momento en que se explican. La charla no trata de entregar más: trata de preparar el entorno de los agentes para que trabajen bien incluso cuando no estás.",
	"05:00 to 06:40, then 35:25": "05:00 a 06:40, luego 35:25",
	"15:25 to 17:55": "15:25 a 17:55",
	"07:05 to 12:05": "07:05 a 12:05",
	"15:25, 20:25 and 30:00": "15:25, 20:25 y 30:00",
	"Source: talk “Here's how I shipped 2,500 PRs last month”, ":
		"Fuente: charla “Here's how I shipped 2,500 PRs last month”,",
	"Trust first, parallel second": "Primero la confianza, luego el paralelismo",
	"With one reliable agent you can run 5, then 20, then hundreds. Without trust, every extra agent is one more PR to review line by line.":
		"Con un agente fiable puedes lanzar 5, luego 20, luego cientos. Sin confianza, cada agente extra es una PR más que revisar línea a línea.",
	"Every correction moves up a level": "Cada corrección sube un nivel",
	"When you correct an agent, put the rule as high as you can in this triangle. The higher it is, the less it depends on the agent's goodwill.":
		"Cuando corriges a un agente, pon la regla lo más arriba posible en este triángulo. Cuanto más arriba, menos depende de la buena voluntad del agente.",
	"The codebase (types, APIs that make the mistake impossible)":
		"El código (tipos, APIs que hacen imposible el error)",
	"Static analysis: lint, compiler, CI": "Análisis estático: lint, compilador, CI",
	"Rules and bugbot": "Reglas y bugbot",
	"The style guide, only enforced by humans": "La guía de estilo, que solo hacen cumplir las personas",
	"Verification is infrastructure": "La verificación es infraestructura",
	"The agent drives the real app, reproduces the bug and proves the fix. That's the /verify-<app> skill, created once per project.":
		"El agente maneja la app real, reproduce el bug y demuestra el arreglo. Es el skill /verify-<app>, creado una vez por proyecto.",
	"The codebase is memory": "El código es la memoria",
	"A maintained feature map tells the agent where things are and how to reach them. Lessons learned end up in code, not in a prompt.":
		"Un feature map mantenido le dice al agente dónde están las cosas y cómo llegar a ellas. Las lecciones aprendidas acaban en el código, no en un prompt.",
	"Curve redrawn from her talk's slide": "Curva redibujada a partir de la diapositiva de su charla",
	"Read the lesson on verification": "Leer la lección sobre la verificación",
	"if you want to go fast, go deep first.": "si quieres ir rápido, primero ve a fondo.",
	"pstack README": "README de pstack",
	"Talks and writing on pstack": "Charlas y textos sobre pstack",
	"Her profile on X": "Su perfil en X",
	"The real explanations live here. The last three come from articles about them, so double-check.":
		"Las explicaciones de verdad están aquí. Las tres últimas vienen de artículos sobre ellas, así que compruébalo.",
	"secondary source": "fuente secundaria",
	"Where to start": "Por dónde empezar",
	"Three ways to read this site": "Tres formas de leer este sitio",
	"Eleven short lessons, to read in order or pick and choose.":
		"Once lecciones cortas, para leer en orden o a la carta.",
	"One card per situation: which playbook, which steps, which skills.":
		"Una tarjeta por situación: qué playbook, qué pasos, qué skills.",
	"The whole catalog to search, filter and sort, with the call graph.":
		"Todo el catálogo para buscar, filtrar y ordenar, con el grafo de llamadas.",
	"Unofficial guide, written with Claude by Rayane to learn pstack. pstack is the work of Lauren Tan.":
		"Guía no oficial, escrita con Claude por Rayane para aprender pstack. pstack es obra de Lauren Tan.",
	"Image source": "Fuente de la imagen",
	"Enlarge image": "Ampliar la imagen",
	"the talk on X": "la charla en X",
	"File in the repository": "Archivo en el repositorio",
	"At step": "En el paso",
	"System theme": "Tema del sistema",
	"Light theme": "Tema claro",
	"Dark theme": "Tema oscuro",
	"very heavy": "muy pesado",
	"The router. It reads your request, picks the right recipe (playbook) and follows it.":
		"El router. Lee tu petición, elige la receta adecuada (playbook) y la sigue.",
	"Your project's skill that starts the app and drives it like a person would. It is the proof that things work.":
		"El skill de tu proyecto que arranca la app y la maneja como una persona. Es la prueba de que todo funciona.",
	"Generates /verify-<app> and its feature map, once per project.":
		"Genera /verify-<app> y su feature map, una vez por proyecto.",
	"Every so often, brings /verify-<app> and the feature map back in line with the code.":
		"De vez en cuando, vuelve a alinear /verify-<app> y el feature map con el código.",
	"“How does this work?” Explains the architecture of a part of the code.":
		"“¿Cómo funciona esto?” Explica la arquitectura de una parte del código.",
	"“Why is it like this?” Reads git history and PRs to find the reasons.":
		"“¿Por qué es así?” Lee el historial de git y las PRs para encontrar las razones.",
	"Combines how and why to explain a topic step by step.": "Combina how y why para explicar un tema paso a paso.",
	"Sketches the shape of the code (types, functions, modules) before writing it. May call arena if the design is big.":
		"Esboza la forma del código (tipos, funciones, módulos) antes de escribirlo. Puede llamar a arena si el diseño es grande.",
	"Several agents do the same task, a judge compares, the best one wins. Expensive.":
		"Varios agentes hacen la misma tarea, un juez compara y gana el mejor. Caro.",
	"Splits work into pieces and runs one agent per piece, in parallel. Expensive.":
		"Divide el trabajo en partes y lanza un agente por parte, en paralelo. Caro.",
	"Adversarial agents try to break your code. Only proven problems survive. Expensive.":
		"Agentes adversarios intentan romper tu código. Solo sobreviven los problemas probados. Caro.",
	"The sub-agent that writes the code while the main agent stays in charge.":
		"El subagente que escribe el código mientras el agente principal sigue al mando.",
	"Write a failing test first, then fix. Only when a simple test exists.":
		"Primero escribe un test que falla, luego arregla. Solo cuando existe un test sencillo.",
	"The closing recipe: small clean commits, cleanup, a short description.":
		"La receta de cierre: commits pequeños y limpios, limpieza, una descripción corta.",
	"Cleans code before commit. Comes from a Cursor plugin, not from pstack.":
		"Limpia el código antes del commit. Viene de un plugin de Cursor, no de pstack.",
	"Runs an agent that removes useless comments before review.":
		"Lanza un agente que quita los comentarios inútiles antes de la revisión.",
	"Writing rules for PR descriptions and commit messages.":
		"Reglas de escritura para descripciones de PR y mensajes de commit.",
	"Removes AI writing tics from a text.": "Quita los tics de escritura de IA de un texto.",
	"Watches the PR and pushes it to green: conflicts, comments, CI.":
		"Vigila la PR y la lleva al verde: conflictos, comentarios, CI.",
	"Has a fresh agent verify each PR, then merges from the bottom up.":
		"Hace que un agente nuevo verifique cada PR y luego hace merge de abajo arriba.",
	"An agent that did not write the code and tests the PR like a user.":
		"Un agente que no escribió el código y prueba la PR como un usuario.",
	"verifier agent": "agente verificador",
	"Wakes the agent at a set interval or when an event happens.":
		"Despierta al agente a intervalos fijos o cuando ocurre un evento.",
	"Keeps a log: one line per decision, with the evidence.": "Lleva un log: una línea por decisión, con la evidencia.",
	"Sums up what changed since your last message and what needs your decision.":
		"Resume lo que cambió desde tu último mensaje y lo que necesita tu decisión.",
	"Rebuilds where you were on a topic, from your past chats.":
		"Reconstruye dónde estabas en un tema a partir de tus chats anteriores.",
	"The recipe for fixing a bug.": "La receta para arreglar un bug.",
	"The recipe for adding a behavior.": "La receta para añadir un comportamiento.",
	"The recipe for restructuring without changing behavior.":
		"La receta para reestructurar sin cambiar el comportamiento.",
	"The recipe for fixing slowness, backed by measurements.": "La receta para arreglar una lentitud, con mediciones.",
	"The recipe for picking a design with throwaway code.": "La receta para elegir un diseño con código desechable.",
	"A queue of PRs handled in parallel, one agent per PR. The most expensive part of pstack.":
		"Una cola de PRs gestionada en paralelo, un agente por PR. La parte más cara de pstack.",
	"Checks that a speed measurement really means something.":
		"Comprueba que una medición de velocidad significa algo de verdad.",
	"For a big job with no recipe: designs a custom recipe and follows it.":
		"Para un trabajo grande sin receta: diseña una receta a medida y la sigue.",
	"Makes a mistake agents keep repeating impossible (types, lint, test).":
		"Hace imposible un error que los agentes repiten (tipos, lint, test).",
	"At the end of a session, suggests skill improvements from what was learned.":
		"Al final de una sesión, sugiere mejoras de skills a partir de lo aprendido.",
	"Creates your own “<you>-mode” skill from your habits.":
		"Crea tu propio skill “<you>-mode” a partir de tus costumbres.",
	"A short judgment rule, e.g. “delete before you add” or “prove it works”.":
		"Una regla de criterio corta, p. ej. “borra antes de añadir” o “demuestra que funciona”.",
	"The pieces": "Las piezas",
	"pstack is a toolbox with three kinds of pieces": "pstack es una caja de herramientas con tres tipos de piezas",
	"Before the flows, meet the pieces. There are <b>three kinds</b>, and each has a different job.":
		"Antes de los flujos, conoce las piezas. Hay <b>tres tipos</b>, y cada uno tiene una función distinta.",
	"A specific tool the agent knows how to use. You call it with /name, for example /why. A skill does one thing.":
		"Una herramienta concreta que el agente sabe usar. Se llama con /nombre, por ejemplo /why. Un skill hace una sola cosa.",
	"Playbook (recipe)": "Playbook (receta)",
	"A step-by-step recipe for one kind of task: fix a bug, add a feature... A recipe calls skills at certain steps.":
		"Una receta paso a paso para un tipo de tarea: arreglar un bug, añadir una feature... Una receta llama a skills en ciertos pasos.",
	"A short judgment rule. It does nothing on its own. Recipes use it to decide, for example “delete before you add”.":
		"Una regla de criterio corta. No hace nada por sí sola. Las recetas la usan para decidir, por ejemplo “borra antes de añadir”.",
	"The front door": "La puerta de entrada",
	"You talk to one front door: /poteto-mode": "Hablas con una sola puerta de entrada: /poteto-mode",
	"You don't need to remember every skill. You describe your task to <b>/poteto-mode</b>, and it picks the recipe for you.":
		"No necesitas recordar todos los skills. Describes tu tarea a <b>/poteto-mode</b> y él elige la receta por ti.",
	"You write your request in plain words, for example “the export button doesn't work”.":
		"Escribes tu petición con palabras normales, por ejemplo “el botón de exportar no funciona”.",
	"It restates your goal, then recognizes the kind of task. Here, it's a bug.":
		"Reformula tu objetivo y reconoce el tipo de tarea. Aquí, es un bug.",
	"A recipe": "Una receta",
	"It opens the matching recipe, here Bug fix, and copies its steps into its task list.":
		"Abre la receta correspondiente, aquí Bug fix, y copia sus pasos en su lista de tareas.",
	"Some skills": "Algunos skills",
	"At each step, the recipe calls the skills it needs. You can also call a skill yourself, without going through the door.":
		"En cada paso, la receta llama a los skills que necesita. También puedes llamar a un skill tú mismo, sin pasar por la puerta.",
	"The proof": "La prueba",
	"The skill used everywhere: /verify-<app>": "El skill que se usa en todas partes: /verify-<app>",
	"Almost every recipe ends by <b>proving</b> the work on the real app. That needs a skill that can drive your app. You create it once.":
		"Casi todas las recetas terminan <b>demostrando</b> el trabajo en la app real. Para eso hace falta un skill capaz de manejar tu app. Lo creas una vez.",
	"/create-verification-skill reads your repo and generates a skill for your project, plus a feature map (one file per feature).":
		"/create-verification-skill lee tu repo y genera un skill para tu proyecto, más un feature map (un archivo por feature).",
	"The resulting skill, for example /verify-terms-era, starts the app and clicks through it like a person.":
		"El skill resultante, por ejemplo /verify-terms-era, arranca la app y hace clic en ella como una persona.",
	"Bug fix, Feature, Refactoring, Prototype, Perf and Shipping call it to check their work.":
		"Bug fix, Feature, Refactoring, Prototype, Perf y Shipping lo llaman para comprobar su trabajo.",
	"When the app changes, /maintain-verification-skill brings the skill and feature map up to date.":
		"Cuando la app cambia, /maintain-verification-skill pone al día el skill y el feature map.",
	"A bug": "Un bug",
	"Flow 1: fixing a bug": "Flujo 1: arreglar un bug",
	"The rule of this recipe: <b>never fix what you haven't seen break</b>. Follow the steps one by one.":
		"La regla de esta receta: <b>nunca arregles lo que no has visto romperse</b>. Sigue los pasos uno a uno.",
	"The agent makes the bug happen itself in the real app. It doesn't ask you to do it.":
		"El agente provoca el bug él mismo en la app real. No te pide que lo hagas tú.",
	"Find the cause": "Encontrar la causa",
	"It rules out hypotheses one by one with evidence (logs, git history), instead of guessing.":
		"Descarta hipótesis una a una con evidencia (logs, historial de git), en lugar de adivinar.",
	"Delegate the fix": "Delegar el arreglo",
	"If the fix spans several functions, it sketches the shape first. Then a sub-agent writes the code.":
		"Si el arreglo abarca varias funciones, primero esboza la forma. Luego un subagente escribe el código.",
	"It replays the exact same path in the app. The bug must be gone.":
		"Repite exactamente el mismo recorrido en la app. El bug tiene que haber desaparecido.",
	"Test first": "Primero el test",
	"In git history, the failing test comes before the fix. Only when a simple test exists.":
		"En el historial de git, el test que falla va antes del arreglo. Solo cuando existe un test sencillo.",
	"Open the PR": "Abrir la PR",
	"The closing recipe, the same for everyone. Lesson 8 covers it.":
		"La receta de cierre, la misma para todos. La lección 8 la explica.",
	"A feature": "Una feature",
	"Flow 2: adding a feature": "Flujo 2: añadir una feature",
	"Here the main agent <b>owns the design</b> and delegates the coding. It acts like a tech lead.":
		"Aquí el agente principal <b>es dueño del diseño</b> y delega el código. Actúa como un tech lead.",
	"Understand the area": "Entender la zona",
	"It reads the code the feature will touch.": "Lee el código que va a tocar la feature.",
	"Sketch the shape": "Esbozar la forma",
	"Types, functions, modules: it sketches two options and keeps the simpler one.":
		"Tipos, funciones, módulos: esboza dos opciones y se queda con la más simple.",
	"Delegate the code": "Delegar el código",
	"A sub-agent writes the code. If several shapes are valid, it runs arena to compare them, which costs more.":
		"Un subagente escribe el código. Si varias formas son válidas, lanza arena para compararlas, lo que cuesta más.",
	"It tests the feature in the real app.": "Prueba la feature en la app real.",
	"Only if the design is debatable: agents try to break the code.":
		"Solo si el diseño es discutible: unos agentes intentan romper el código.",
	"Same closing recipe as for a bug.": "La misma receta de cierre que para un bug.",
	"Other recipes": "Otras recetas",
	"Three more recipes, same logic": "Tres recetas más, la misma lógica",
	"You now know the pattern: <b>prepare, do, prove, open the PR</b>. These three recipes follow it too, each with a twist.":
		"Ya conoces el patrón: <b>preparar, hacer, demostrar, abrir la PR</b>. Estas tres recetas también lo siguen, cada una con un matiz.",
	"Change the structure without changing behavior. The twist: first freeze the behavior with a test, and keep it green at every step.":
		"Cambiar la estructura sin cambiar el comportamiento. El matiz: primero se fija el comportamiento con un test, que se mantiene en verde en cada paso.",
	"Perf issue": "Problema de rendimiento",
	"Fix slowness. The twist: one measurement before, one after, and a check that the measurement is reliable.":
		"Arreglar una lentitud. El matiz: una medición antes, otra después, y una comprobación de que la medición es fiable.",
	"Pick between designs. The twist: the code is throwaway, the result is a decision. Then you move on to the Feature recipe.":
		"Elegir entre diseños. El matiz: el código es desechable, el resultado es una decisión. Luego se pasa a la receta Feature.",
	"A PR's life, from open to merge": "La vida de una PR, de la apertura al merge",
	"Three recipes in a row. Remember one rule: <b>whoever wrote the code never approves their own work</b>.":
		"Tres recetas seguidas. Recuerda una regla: <b>quien escribió el código nunca aprueba su propio trabajo</b>.",
	"Opening a PR": "Abrir una PR",
	"Small clean commits, cleanup of code and comments, a short description with fixed headings. The PR opens ready, never as a draft.":
		"Commits pequeños y limpios, limpieza de código y comentarios, una descripción corta con secciones fijas. La PR se abre lista, nunca como borrador.",
	"Watches the PR. Fixed order: conflicts first, then review comments, then CI. Never merges.":
		"Vigila la PR. Orden fijo: primero los conflictos, luego los comentarios de revisión, luego la CI. Nunca hace merge.",
	"A fresh agent tests each PR in the real app. Only approved PRs get merged, from the bottom of the stack up.":
		"Un agente nuevo prueba cada PR en la app real. Solo se hace merge de las PRs aprobadas, desde la base de la pila hacia arriba.",
	"The multipliers": "Los multiplicadores",
	"The skills that launch many agents": "Los skills que lanzan muchos agentes",
	"Some skills launch <b>several agents at once</b>. They give better results but cost a lot of tokens. Recipes call them only when it's worth it.":
		"Algunos skills lanzan <b>varios agentes a la vez</b>. Dan mejores resultados pero cuestan muchos tokens. Las recetas solo los llaman cuando vale la pena.",
	"arena: compare": "arena: comparar",
	"3 agents do the same thing, a judge compares them, the best one wins and borrows the others' good ideas.":
		"3 agentes hacen lo mismo, un juez los compara, gana el mejor y toma prestadas las buenas ideas de los demás.",
	"swarm: split up": "swarm: repartir",
	"A big job cut into pieces, one agent per piece, then a single report.":
		"Un trabajo grande dividido en partes, un agente por parte, y luego un único informe.",
	"interrogate: attack": "interrogate: atacar",
	"Agents try to break your change. A problem only counts if a command proves it.":
		"Unos agentes intentan romper tu cambio. Un problema solo cuenta si un comando lo demuestra.",
	"The catch": "La trampa",
	"architect looks light, but it calls arena when the design is big. So a simple feature can get expensive without warning.":
		"architect parece ligero, pero llama a arena cuando el diseño es grande. Así que una feature sencilla puede salir cara sin avisar.",
	"Letting the agent work while you sleep": "Dejar trabajar al agente mientras duermes",
	"The key to working without you: <b>say upfront what “done” means</b>, so the agent knows when to stop.":
		"La clave para trabajar sin ti: <b>decir de antemano qué significa “terminado”</b>, para que el agente sepa cuándo parar.",
	"Define “done”": "Definir “terminado”",
	"A checkable condition, for example “tests pass and the bug no longer reproduces”.":
		"Una condición comprobable, por ejemplo “los tests pasan y el bug ya no se reproduce”.",
	"The agent wakes itself up, makes the smallest useful change, checks, keeps or reverts. A plateau is not a reason to stop.":
		"El agente se despierta solo, hace el cambio útil más pequeño, comprueba, conserva o revierte. Una meseta no es motivo para parar.",
	"Log everything": "Registrarlo todo",
	"One line per decision with its evidence. Another model reads the log and flags what needs your attention.":
		"Una línea por decisión con su evidencia. Otro modelo lee el log y señala lo que necesita tu atención.",
	"Catch you up": "Ponerte al día",
	"When you're back, a short summary of what changed and which decisions wait for you.":
		"Cuando vuelves, un resumen corto de lo que cambió y de las decisiones que te esperan.",
	"XXL version": "Versión XXL",
	"Autopilot does the same for a whole queue of PRs, one agent per PR. It's the most expensive part of pstack.":
		"Autopilot hace lo mismo para toda una cola de PRs, un agente por PR. Es la parte más cara de pstack.",
	"Cheat sheet": "Chuleta",
	"Cheat sheet: when you want X, type Y": "Chuleta: cuando quieras X, escribe Y",
	"Everything you've seen, summed up. Keep this screen handy.":
		"Todo lo que has visto, resumido. Ten esta pantalla a mano.",
	"I don't know what to use": "No sé qué usar",
	"Fix a bug": "Arreglar un bug",
	"Add a feature": "Añadir una feature",
	"Pick a design": "Elegir un diseño",
	"Get my code challenged": "Que desafíen mi código",
	"Leave overnight": "Dejarlo de noche",
	"Come back": "Volver",
	"Big job with no recipe": "Trabajo grande sin receta",
	"A recurring mistake": "Un error recurrente",
	"Here's how I shipped 2,500 PRs last month": "Here's how I shipped 2,500 PRs last month",
	"Video on X · ~38 min · planned for Cursor Compile London, streamed live":
		"Vídeo en X · ~38 min · preparado para Cursor Compile London, emitido en directo",
	"The core talk: the trust curve, the 5 correction levels, the codebase as memory, automations. This site follows it.":
		"La charla central: la curva de confianza, los 5 niveles de corrección, el código como memoria, las automatizaciones. Este sitio la sigue.",
	"pstack guide, part 1": "Guía de pstack, parte 1",
	"Written thread on X": "Hilo escrito en X",
	"Verification as infrastructure and the feature map as memory.":
		"La verificación como infraestructura y el feature map como memoria.",
	"pstack guide, part 2": "Guía de pstack, parte 2",
	"Prototype to plan, and only parallelize once trust is earned.":
		"Del prototipo al plan, y paralelizar solo cuando la confianza está ganada.",
	"SpaceX AI Engineer Lauren Tan, part 1": "SpaceX AI Engineer Lauren Tan, parte 1",
	"Video interview · ~55 min · links to the transcript": "Entrevista en vídeo · ~55 min · enlaza a la transcripción",
	"Agents earn trust by testing the real app. Parallelism comes after.":
		"Los agentes se ganan la confianza probando la app real. El paralelismo viene después.",
	"AI Engineer talk": "Charla en AI Engineer",
	"November 2026 · links to a write-up": "Noviembre de 2026 · enlaza a un resumen",
	"Every correction should become a deterministic check (lint, type, API), not one more line in a rules file.":
		"Cada corrección debería convertirse en una comprobación determinista (lint, tipo, API), no en una línea más de un archivo de reglas.",
	"Lightcone (Y Combinator), with Roman Ugarte": "Lightcone (Y Combinator), con Roman Ugarte",
	"Podcast · November 2026 · links to a write-up": "Podcast · noviembre de 2026 · enlaza a un resumen",
	"The trust ladder all the way up: her agents merge their own PRs.":
		"La escalera de confianza hasta arriba del todo: sus agentes hacen merge de sus propias PRs.",
	"number of agents": "número de agentes",
	"where you start": "donde empiezas",
	"Trust grows with the number of agents": "La confianza crece con el número de agentes",
	"Scroll, swipe or use the arrow keys": "Rueda, desliza o usa las flechas del teclado",
	"Lesson: verification": "Lección: la verificación",
	"A SKILL.md file the agent reads and follows. You call it with /name.":
		"Un archivo SKILL.md que el agente lee y sigue. Se llama con /nombre.",
	"A step-by-step recipe for one kind of task, opened by /poteto-mode.":
		"Una receta paso a paso para un tipo de tarea, que abre /poteto-mode.",
	"A small principle-* skill that gives a judgment rule.":
		"Un pequeño skill principle-* que da una regla de criterio.",
	"A second agent launched by the first, with its own memory. Each launch costs tokens.":
		"Un segundo agente lanzado por el primero, con su propia memoria. Cada lanzamiento cuesta tokens.",
	"The skill that drives your app like a person, made by create-verification-skill.":
		"El skill que maneja tu app como una persona, creado por create-verification-skill.",
	"A second working copy of the repo on another branch, so several agents can code at once.":
		"Una segunda copia de trabajo del repo en otra rama, para que varios agentes programen a la vez.",
	"The main branch, main.": "La rama principal, main.",
	"PRs stacked, each based on the previous one.": "PRs apiladas, cada una basada en la anterior.",
	"PASS or FAIL given by an agent that did not write the code.":
		"PASS o FAIL dado por un agente que no escribió el código.",
	"A checkable condition that says “done”.": "Una condición comprobable que dice “terminado”.",
	"Reruns the agent on an interval or event": "Relanza el agente a intervalos o ante un evento",
	"Claude Code's /loop, or a cron": "El /loop de Claude Code, o un cron",
	"Write a SKILL.md": "Escribir un SKILL.md",
	"skill-creator on Claude, or your own skill": "skill-creator en Claude, o tu propio skill",
	"cursor-team-kit plugin": "plugin cursor-team-kit",
	"Your /verify-<app>, a home-made deslop skill": "Tu /verify-<app>, un skill deslop casero",
	"Cursor's subagent tool": "La herramienta de subagentes de Cursor",
	"Claude Code's Agent tool. Codex may lack a cloud equivalent":
		"La herramienta Agent de Claude Code. Puede que Codex no tenga un equivalente en la nube",
	"Rule written by setup-pstack": "Regla escrita por setup-pstack",
	"A model config file your skills read": "Un archivo de configuración de modelos que leen tus skills",
	"Where transcripts live": "Dónde viven las transcripciones",
	"~/.claude/projects/ on Claude Code": "~/.claude/projects/ en Claude Code",
	"One remote agent per PR": "Un agente remoto por PR",
	"Claude Code cloud sessions, or local worktrees": "Sesiones en la nube de Claude Code, o worktrees locales",
	Home: "Inicio",
	Back: "Atrás",
	Step: "Paso",
	Lesson: "Lección",
	"token-heavy": "costoso en tokens",
	Review: "Revisión",
	Collapse: "Plegar",
	Situation: "Situación",
	Here: "Aquí",
	File: "Archivo",
	none: "ninguno",
	Catalog: "Catálogo",
	Guide: "Guía",
	Table: "Tabla",
	Graph: "Grafo",
	Name: "Nombre",
	Type: "Tipo",
	Cost: "Coste",
	Light: "Ligero",
	Medium: "Medio",
	Heavy: "Pesado",
	Vocabulary: "Vocabulario",
	Done: "Terminado",
	of: "de",
	Sources: "Fuentes",
	Open: "Abrir",
	Source: "Fuente",
	Close: "Cerrar",
	Nothing: "Nada",
	light: "ligero",
	medium: "medio",
	heavy: "pesado",
	Principle: "Principio",
	You: "Tú",
	Create: "Crear",
	Use: "Usar",
	Everywhere: "En todas partes",
	Maintain: "Mantener",
	Reproduce: "Reproducir",
	Verify: "Verificar",
	Challenge: "Desafiar",
	Restructure: "Reestructurar",
	Ship: "Entregar",
	Understand: "Entender",
	Build: "Construir",
	System: "Sistema",
	Agent: "Agente",
	owner: "responsable",
	proof: "prueba",
	execute: "ejecutar",
	pause: "pausa",
	"Everything explained here was written and presented by Lauren Tan herself: her talks, her X threads and the pstack repository. This site only summarizes her work. The last three sources are articles about her, so double-check.":
		"Todo lo que se explica aquí lo escribió y presentó la propia Lauren Tan: sus charlas, sus hilos en X y el repositorio de pstack. Este sitio solo resume su trabajo. Las tres últimas fuentes son artículos sobre ella, así que compruébalo.",
	"The feature map": "La feature map",
	"A feature map is your app's user guide, written for the agent":
		"Una feature map es el manual de tu app, escrito para el agente",
	"To prove its work, the agent has to know where each feature of your app lives and how to reach it. That's the job of the <b>feature map</b>: a folder of Markdown files, one per feature, stored next to the verification skill.":
		"Para demostrar su trabajo, el agente tiene que saber dónde está cada funcionalidad de tu app y cómo llegar a ella. Ese es el papel de la <b>feature map</b>: una carpeta de archivos Markdown, uno por funcionalidad, guardada junto al skill de verificación.",
	"/create-verification-skill reads your repo and generates a verification skill for your project: a CLI that drives the app, plus a feature map (one file per feature).":
		"/create-verification-skill lee tu repo y genera un skill de verificación para tu proyecto: un CLI que maneja la app, más una feature map (un archivo por funcionalidad).",
	"/create-verification-skill reads your repo and generates **a verification skill** for your project, which holds **a CLI** to drive the app and **a feature map** (one file per feature).":
		"/create-verification-skill lee tu repo y genera para tu proyecto **un skill de verificación**, que contiene **un CLI** para manejar la app y **una feature map** (un archivo por funcionalidad).",
};
