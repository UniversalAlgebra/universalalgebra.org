# Core Concepts

To understand the FLRP, we need a shared vocabulary. Here are the fundamental definitions from lattice theory and universal algebra.

### Finite Lattice
A **lattice** is a partially ordered set where every two elements have a unique least upper bound (join, written $x \lor y$) and a unique greatest lower bound (meet, written $x \land y$). A **finite lattice** is simply a lattice with a finite number of elements. They are the fundamental "shapes" we are trying to represent.

### Algebra and Finite Algebra
An **algebra** $\mathbf{A}$ consists of a non-empty set $A$ called the *universe* and a collection of finitary operations on $A$. A **finite algebra** is one whose universe $A$ is a finite set. Think of groups, rings, and vector spaces as examples of algebras.

### Congruence Lattice ($\text{Con } \mathbf{A}$)
A **congruence** on an algebra $\mathbf{A}$ is an equivalence relation on its universe that is compatible with all of its operations. The set of all congruences on $\mathbf{A}$, ordered by set inclusion, forms a lattice itself—the **congruence lattice of $\mathbf{A}$**, denoted $\text{Con } \mathbf{A}$. This lattice captures the essential "internal symmetries" of the algebra.

### Algebraic Lattice
A lattice is **algebraic** if it is complete and every element is a join of compact elements. A key theorem by Birkhoff and Frink (1948) states that the congruence lattice of *any* algebra is always an algebraic lattice. Every finite lattice is, by definition, an algebraic lattice.


