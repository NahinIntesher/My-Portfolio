export default function PageHead({ no, title, tag }: { no: string; title: string; tag: string; lede?: string }) {
  return <header className="page-heading"><div className="page-heading-top"><span className="eyebrow">NAHIN INTESHER / {tag}</span><span className="page-no">{no}</span></div><h1 className="page-title">{title}<span className="heading-dot">.</span></h1></header>;
}
