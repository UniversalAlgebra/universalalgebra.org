# Tame Congruence Theory (TCT)

One of the most powerful tools for studying finite algebras is **Tame
Congruence Theory**, developed by David Hobby and Ralph McKenzie in their 1988
monograph, *The Structure of Finite Algebras*.

TCT provides a deep, structural analysis of finite algebras by examining the
"local" behavior of their congruence lattices.

### The Core Idea of TCT

TCT asserts that the structure of a finite algebra is profoundly constrained by
the structure of its congruence lattice.  It classifies the prime intervals in
any congruence lattice into one of five types, revealing the "local flavor" of
the algebra in that region.

### The Five Types

Every local neighborhood in a finite algebra behaves like (is "polynomially
equivalent" to) one of five fundamental types of minimal algebras:

1.  **Unary Type (Type 1):** a set with a group of permutations acting on it.
2.  **Affine Type (Type 2):** a vector space.
3.  **Boolean Type (Type 3):** the two-element Boolean algebra.
4.  **Lattice Type (Type 4):** the two-element lattice.
5.  **Semilattice Type (Type 5):** the two-element semilattice.

### Relevance to the FLRP

TCT places genuine necessary conditions on the *labeled* congruence lattice of
a finite algebra, and for a while these pages proposed it as the source of new
constraints on the problem.  Its reach here turns out to be limited.  The
Pálfy–Pudlák theorem reduces the problem to intervals $[H, G]$, which are the
congruence lattices of transitive $G$-sets; a $G$-set is a unary algebra, every
prime quotient of a unary algebra has type 1, and every unary algebra is
abelian.  So on the algebras that matter, every label is the same and no TCT
condition distinguishes one interval from another.  TCT remains a tool for
representations by algebras with richer operations, and for understanding why
the group-theoretic form of the problem is the hard one: type 1, the type about
which the theory says least, is the only type that occurs.  What replaces the
labeling on the group side is described on [the plan](deep.md) page.
