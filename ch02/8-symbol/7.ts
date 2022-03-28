const first: Person["first"] = p["first"];
//    -----                    ---------- // values
//           _______________ // type

type PersonEl = Person["first" | "last"]; // type is string
type Tuple = [string, number, Date]; // type is string
type TupleEl = Tuple[number]; // string | number | Date
