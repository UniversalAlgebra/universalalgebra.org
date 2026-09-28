# Current & Future Research

The Finite Lattice Representation Problem remains open, and the prevailing
conjecture is that its answer is negative: some finite lattice is the
congruence lattice of no finite algebra.  The research described on these pages
pursues that conjecture through the group-theoretic form of the problem given
by the Pálfy–Pudlák theorem, and it does so inside a proof assistant, so that
the logic of the strategy, the theorems it borrows, and the computations it
relies on are all checked by machine.

### The approach in brief

+  **Interval enforceable properties.**  A lattice shape can *force* structure
   on any finite group that carries it as an interval $[H, G]$ over a core-free
   subgroup $H$.  Our paper [Interval enforceable properties of finite
   groups](https://arxiv.org/abs/1205.1927) shows that the problem has a
   negative answer as soon as finitely many such enforced properties are found
   that no finite group can have at once.
+  **A catalog and a hunt.**  The enforced properties known from the literature
   are collected in a machine-readable catalog, each with its source read in
   the primary text, and the hunt for an incompatible family runs over that
   catalog under explicit constraints, the strongest of which is that every
   admissible class contains wreath products of every finite simple group.
+  **Computation as certificates.**  Group-theoretic searches in GAP supply
   representations of small lattices, and each is re-verified in Agda from
   finite data before it is used.  The seven-element frontier closed in 2026
   with a representation of the lattice $L_7$, and the smallest parachute
   lattices are now known to be representable as well.

### Where it stands

The details, the results to date, and the ordered list of paths being tried
are on the [next page](deep.md).  The work itself is in the
[agda-algebras](https://github.com/ualib/agda-algebras) repository, whose
[tracking issue](https://github.com/ualib/agda-algebras/issues/451) and
[goal issue](https://github.com/ualib/agda-algebras/issues/578) record its
progress.

### A route that was tried and withdrawn

An earlier version of these pages proposed tame congruence theory as a source
of new enforceable properties.  It is not one: the algebras the problem reduces
to are transitive $G$-sets, which are unary, and on unary algebras every prime
quotient has type 1 and every quotient is abelian, so the theory's constraints
cannot tell one interval from another.  The [next page](deep.md) says what
survives of the idea.
