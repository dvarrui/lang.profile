

Para evitar polémicas vamos a tener dos definiciones de programación estructurada:

| Código | Nombre          | Descripción                 | Ejemplos                   |
| ------ | --------------- | --------------------------- | -------------------------- |
|     S0 | Sin estructuras | Prog. NO estructurada       | Cód. máquina y ensamblador |
|     S1 | Mixta           | Prog. estructurada CON goto | C/C++ |
|     S2 | Casi pura       | Prog. estructurada CON goto pero sin funcionalidad | Java. Cuando se defina la funcionalidad pasará a S1 o cuando se elimine del lenguaje pasará a S3. |
|     S3 | Pura            | Programación estructurada SIN goto (Dijkstra) | Algol 60 |



| Nivel | Paradigma     | Lenguaje       | Saltos     | Descripción |
| ----- | ------------- | -------------- | ---------- | ----------- |
|   0.0 |           nil | Código máquina | EXPLICITOS | Tenemos la instrucción XXX que hace el salto |
|   0.5 |           nil | Ensamblador    | EXPLICITOS | Tenemos la instrucción JMP |
|   1.0 | Estructurado? | BASIC MSX      | Explícitos e implícitos |
|   2.0 | Estructurado  | Pascal         | Implícitos
