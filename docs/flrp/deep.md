# A Machine-Checked Attack on the Finite Lattice Representation Problem

This page is the map of a research program that is being carried out, in the
open, inside the [agda-algebras][] library.  Every statement the program
relies on is written in Agda, every theorem borrowed from the literature enters
as a named and cited hypothesis rather than as an axiom, and every computation
that feeds the argument is re-checked by the proof assistant from finite data.
The page says what the program is, what it has established, and where it is
going; the details, proofs, and running records live in the repository, and
the links at the end of each section lead there.

It replaces an earlier plan, published here in May 2025, that proposed tame
congruence theory as the source of new constraints on the problem.  That route
is closed for reasons that take two sentences to state (see § 5 below), and it
seemed better to say so than to leave the page up.

## 1. The problem, and the bridge to group theory

The Finite Lattice Representation Problem asks whether every finite lattice is
isomorphic to the congruence lattice $\mathrm{Con}(\mathbf A)$ of some *finite*
algebra $\mathbf A$.  Without the finiteness requirement the answer is yes
(Grätzer and Schmidt, 1963), so finiteness is the whole content of the
question.

Pálfy and Pudlák (1980) proved that the following are equivalent:

+  (A) every finite lattice is the congruence lattice of a finite algebra;
+  (B) every finite lattice is an interval $[H, G]$ in the subgroup lattice of a
   finite group $G$.

The bridge from intervals to congruence lattices is elementary: if $H$ is a
subgroup of $G$, the congruence lattice of the $G$-set $G/H$ is the interval
$[H, G]$.  The bridge back is the hard direction, and it is global rather than
lattice by lattice.  The program treats the group side as primary, works under
the normalization that $H$ is **core-free** (it contains no nontrivial normal
subgroup of $G$, so that $G$ acts faithfully on $G/H$), and bets on a negative
answer while keeping the positive-direction machinery alive.

## 2. The strategy in one paragraph

Call a property $P$ of finite groups **core-free interval enforceable**
(cf-IE) *via* a finite lattice $L$ if every finite group $G$ having an interval
$[H, G] \cong L$ over a core-free $H$ has property $P$.  The **parachute**
$\mathcal P(L_1, \dots, L_n)$ is the lattice obtained by hanging the lattices
$L_i$ from a common top and adjoining a new bottom below their bottoms.  The
central theorem of the framework (Theorem 3.6 of [Interval enforceable
properties of finite groups][ieprops]) says that statement (B) is equivalent to
the following: whenever properties $P_1, \dots, P_n$ are cf-IE via lattices
$L_1, \dots, L_n$, at least two of which have more than two elements, some
single finite group has all of $P_1, \dots, P_n$ at once, with every $L_i$
realized as an interval over a core-free subgroup.  The proof runs through a
core-free representation of the parachute of the $L_i$, whose canopies are the
$L_i$ themselves.  The consequence that drives the program:

> **Exhibit finitely many cf-IE properties that no finite group has
> simultaneously, and the Finite Lattice Representation Problem has a negative
> answer.**

This logic is machine-checked, from Dedekind's rule and the parachute
construction up to the meta-theorem itself, with the imported theorems
(Pálfy–Pudlák among them) as explicit hypotheses:
[`FLRP.Enforceable`][enforceable], [`FLRP.Parachute.Theorems`][theorems].

## 3. What is established (September 2026)

+  **The framework is formal.**  A core-free representation of a parachute
   with at least two canopies of more than two elements forces the group to
   have a unique minimal normal subgroup, nonabelian, with trivial centralizer,
   and every proper member of the interval is again core-free.  These are the
   first entries of an **enforcement catalog**, a machine-readable inventory of
   "an interval of this shape forces a group of this kind" theorems, each
   recast as a precise enforceability statement, each marked as *derived* in
   the library or *imported* from a paper that was read in its primary text,
   and each tracking whether its lattice is known to be representable, since an
   entry over a non-representable lattice proves nothing.  The catalog has
   twelve entries.  [`FLRP.Reductions`][reductions].
+  **Two no-go theorems bound the search.**  No property and its negation are
   both enforceable via representable lattices at the plain (non-core-free)
   level, which is why the program lives at the core-free level; and every
   class that is cf-IE via a representable lattice contains wreath products
   $S \wr U$ for every finite nonabelian simple group $S$.  So a refuting family
   cannot be separated by anything that all such wreath products share.  Every
   family expressible in today's catalog is dead for that reason, and the
   surviving direction is recorded precisely.  [`FLRP.WreathNoGo`][wreath],
   [`FLRP.Hunt`][hunt].
+  **Closure and duality are formal.**  The class of representable lattices is
   closed under finite products, ordinal sums, and duals; the duality theorem
   of Kurzweil and Netter is proved in the library and instantiated at a
   concrete simple group.  [`FLRP.KurzweilNetter.Duality`][duality].
+  **Computation enters only as certificates.**  Searches run in GAP, and
   every positive result is re-verified in Agda from the finite data (an
   algebra's tables and an isomorphism witness).  The census of small lattices
   is certified this way.  [`FLRP.Certificates`][certificates].
+  **The seven-element frontier is closed.**  The last seven-element lattice
   without a known representation, $L_7$, is an interval in $\mathrm{PSL}(2,64)$
   (C. Tian, 2026) and, at smaller index, in $\mathrm{Sp}(6,2)$; both are
   verified in GAP, and the write-up is in preparation.  Every
   lattice with at most seven elements is therefore representable, and the
   census frontier is the 222 lattices with eight elements.
+  **The smallest parachutes are representable.**  The hexagon and its
   seven-element relatives occur as core-free intervals in almost simple
   groups, found by scanning GAP's library of tables of marks by group rather
   than by degree.  A consequence for the strategy: any two properties
   core-free enforced by a three-element chain are satisfied by one group, so
   the smallest parachutes are not where a contradiction can come from.
+  **Aschbacher's program is read and placed.**  Aschbacher's papers on
   intervals in subgroup lattices (2008 to 2013) study disconnected intervals.
   Read from the primary texts, they say this about parachutes: a parachute
   with two canopies of more than two elements is one of his D-lattices, so his
   structure theorem for such intervals applies and agrees with the framework's
   own Lemma 3.7 while adding information about the action on the socle; his
   reduction theorems, which push minimal representations toward almost simple
   groups, are stated for a narrower class that no parachute belongs to.  A
   re-reading of the proof (2026-09-28) found that the argument itself reaches
   the *coatomistic* parachutes, those in which every element is a meet of
   maximal ones, with one caveat about the dual lattice; the first reading had
   missed this on a dropped symbol in the extracted text.  The dictionary is
   recorded in the catalog's survey note (its § 4.12 and § 4.13), and the
   parachute theorem in its own note ([the parachute analog of Theorem 3][t3]).

## 4. The plan

The program's tracking issue states one goal: solve the problem, or find and
describe a concrete path to a complete solution, and stop for nothing less.  It
names the paths in the order they are being tried.  Stated here without their
working details:

1.  **A parachute version of Aschbacher's reduction.**  His theorem that a
    minimal representation of a suitable disconnected lattice is almost simple
    or arises from a signalizer lattice is stated for a class no parachute
    belongs to.  The first pass over this path found that the argument
    transfers to the coatomistic parachutes: a minimal representation of such
    a parachute is almost simple, or a signalizer lattice, or realizes the
    dual lattice in a smaller group.  The smallest such parachute has eight
    elements, two four-element Boolean canopies, and is an interval in none of
    the 414 groups of GAP's library of tables of marks.  The reduction imports
    the machinery of almost simple groups; it does not shorten it, and the
    almost simple case is where the path now stands ([the pass's
    record][paths]).
2.  **Labeled intervals.**  Each covering pair of an interval $[H, G]$ carries a
    primitive permutation group, and each coatom carries the O'Nan–Scott type
    of a primitive action of $G$.  The known core-free parachute
    representations already carry different labels, and Aschbacher's analysis
    of maximal overgroups is this labeling for the coatoms.  The task is to
    tabulate the labels on every known representation, find the rules a
    parachute's shape imposes on them, and only then propose an enforceable
    property that separates groups by their labels.  The first pass tabulated
    them: in an almost simple group the label carries nothing, the Kurzweil
    wreaths label every coatom of diagonal type, and a wreathed almost simple
    representation labels every coatom of product type; the rule the shape
    imposes is that the type is the same at every coatom once two canopies
    have two coatoms each, so the label alone does not separate.
3.  **Shareshian's Conjecture D at its smallest case.**  Aschbacher reduced the
    conjecture that a certain family of disconnected lattices is never an
    interval to two questions about almost simple groups; both are settled for
    alternating and symmetric groups.  A proof for one lattice of the family
    would be a negative answer to the whole problem.
4.  **The $M_{16}$ question**, through the reduction of Baddeley and Lucchini
    (1997) to almost simple groups and twisted wreath products, which the
    catalog has not yet consumed.
5.  **The positive direction**, only if the negative paths die: what a proof of
    statement (B) would have to construct, and whether the known closure
    operations can be iterated into a construction for every finite lattice.

Each path is reviewed against explicit kill criteria, and each review is
appended to the hunt's running record, so that the program's own account of
its progress is auditable.

## 5. Why the earlier plan was withdrawn

The earlier page proposed to obtain new enforceable properties from tame
congruence theory: the types of the prime quotients of $\mathrm{Con}(G/H)$,
type omission, Maltsev conditions, commutator conditions.  None of these can
distinguish one interval from another.  A transitive $G$-set is a unary
algebra; every prime quotient of a unary algebra has type 1, and every unary
algebra is abelian, because the term condition is vacuous when each polynomial
depends on a single variable.  So the variety generated by $G/H$ never omits
type 1, never has a Taylor term, and has only abelian quotients, whatever the
interval looks like.  What survives of the idea is the labeling of § 4, item 2,
whose labels are permutation groups rather than tame-congruence types.

## 6. How the work is organized

+  The repository is [agda-algebras][], a library of universal algebra in Agda
   whose `FLRP` tree holds the problem-specific development and whose
   `Classical` and `Setoid` trees receive the reusable group and lattice
   theory the program needs.  The library builds under `--safe`: nothing is
   postulated.
+  The planning document is the [research roadmap][roadmap]; the survey notes
   of the research phases record what each phase built, what it assumed, and
   what it rejected: the [parachute theorems][rp1], the [enforcement
   catalog][rp2], the [hunt][rp3], and the [wreath no-go][rp4].  Every
   literature claim in them is marked as verified in its primary source,
   verified only in a secondary source, or unverified, and only verified
   claims are consumed.
+  The program's history and its current goal are GitHub issues:
   [the tracking issue][tracking] and [the goal issue][goal].  Questions and
   pointers to relevant literature are welcome there.

[agda-algebras]: https://github.com/ualib/agda-algebras
[ieprops]: https://arxiv.org/abs/1205.1927
[enforceable]: https://agda-algebras.universalalgebra.org/FLRP/Enforceable/
[theorems]: https://agda-algebras.universalalgebra.org/FLRP/Parachute/Theorems/
[reductions]: https://agda-algebras.universalalgebra.org/FLRP/Reductions/
[wreath]: https://agda-algebras.universalalgebra.org/FLRP/WreathNoGo/
[hunt]: https://agda-algebras.universalalgebra.org/FLRP/Hunt/
[duality]: https://agda-algebras.universalalgebra.org/FLRP/KurzweilNetter/Duality/
[certificates]: https://agda-algebras.universalalgebra.org/FLRP/Certificates/
[roadmap]: https://github.com/ualib/agda-algebras/blob/master/docs/notes/flrp-research-roadmap.md
[rp1]: https://github.com/ualib/agda-algebras/blob/master/docs/notes/flrp-rp1-parachutes.md
[rp2]: https://github.com/ualib/agda-algebras/blob/master/docs/notes/flrp-rp2-catalog.md
[rp3]: https://github.com/ualib/agda-algebras/blob/master/docs/notes/flrp-rp3-hunt.md
[rp4]: https://github.com/ualib/agda-algebras/blob/master/docs/notes/flrp-rp4-wreath.md
[tracking]: https://github.com/ualib/agda-algebras/issues/451
[t3]: https://github.com/ualib/agda-algebras/blob/master/docs/notes/flrp-parachute-theorem3.md
[paths]: https://github.com/ualib/agda-algebras/blob/master/docs/notes/flrp-m6-27-paths.md
[goal]: https://github.com/ualib/agda-algebras/issues/578
