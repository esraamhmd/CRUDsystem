const base = import.meta.env.BASE_URL

const IMG    = { width:'16px', height:'16px', objectFit:'contain', filter:'brightness(0) invert(1)' }
const IMG_LG = { width:'20px', height:'20px', objectFit:'contain', filter:'brightness(0) invert(1)' }

export default function ProductTable({ dark, cardBg, data, allCount, onEdit, onDelete, onDeleteAll }) {
  const rowBdr = dark ? '#1D546D' : '#b8d8e3'
  const rowTx  = dark ? '#d4edf5' : '#0d2a3f'
  const thBg   = dark ? 'linear-gradient(90deg,#030f15,#061E29,#030f15)' : 'linear-gradient(90deg,#0d3a50,#1D546D,#0d3a50)'
  const thColor = dark ? '#ffffff' : '#5ba3bf'

  return (
    <>
      {allCount > 0 && (
        <div className="animate-fu-3 mb-4">
          <button
            onClick={onDeleteAll}
            className="btn-sh relative overflow-hidden w-full h-11.5 rounded-full text-sm font-bold text-white flex items-center justify-center gap-3 cursor-pointer bg-br-grad shadow-br-btn transition-all duration-250 hover:bg-br-gradh hover:shadow-brh hover:-translate-y-0.5 hover:scale-102 active:scale-95"
          >
            <img src={`${base}del.png`} style={IMG_LG} alt="" />
            Delete All ({allCount})
          </button>
        </div>
      )}

      <div
        className="btn-sh relative overflow-hidden rounded-2xl border animate-fu-4 transition-[background,border-color,box-shadow] duration-400 shadow-card hover:shadow-cardh"
        style={{ background: cardBg, borderColor: '#1D546D', padding: 0 }}
      >
        <div
          className="overflow-hidden rounded-2xl border"
          style={{ borderColor: '#256180', boxShadow: '0 12px 50px rgba(0,0,0,.7),0 4px 16px rgba(29,84,109,.35)' }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontSize:"1rem" }}>
              <thead>
                <tr
                  className="uppercase tracking-widest text-xs font-extrabold"
                  style={{ background: thBg, color: thColor }}
                >
                  {['#','Title','Price','Taxes','Ads','Discount','Total','Category','Update','Delete'].map(h => (
                    <th key={h} className="p-4 text-center border-b-2" style={{ borderColor: '#256180' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="p-6 text-center" style={{ color: '#5ba3bf' }}>
                      No products yet — create one above.
                    </td>
                  </tr>
                ) : data.map((d, i) => (
                  <tr
                    key={i}
                    className="trow transition-[background,transform] duration-200"
                    style={{ borderBottom: `1px solid ${rowBdr}`, color: rowTx }}
                  >
                    <td className="p-4 text-center">{i + 1}</td>
                    <td className="p-4 text-left max-w-37.5 overflow-hidden text-ellipsis whitespace-nowrap">{d.title}</td>
                    <td className="p-4 text-center">${d.price}</td>
                    <td className="p-4 text-center">${d.taxes}</td>
                    <td className="p-4 text-center">${d.ads}</td>
                    <td className="p-4 text-center">${d.discount}</td>
                    <td className="p-4 text-center font-extrabold" style={{ color: '#5ba3bf' }}>${d.total}</td>
                    <td className="p-4 text-center">{d.category}</td>
                    <td className="p-2">
                      <button
                        onClick={() => onEdit(i)}
                        className="bi-btn btn-sh relative overflow-hidden inline-flex items-center justify-center gap-1.25 h-10 px-4 rounded-2xl text-sm font-bold text-white border-none cursor-pointer bg-be-grad shadow-be transition-all duration-250 hover:bg-be-gradh hover:shadow-beh hover:-translate-y-0.5 hover:scale-104 active:scale-92 whitespace-nowrap"
                      >
                        <img src={`${base}edit.png`} style={IMG} alt="edit" /> Edit
                      </button>
                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => onDelete(i)}
                        className="bi-btn btn-sh relative overflow-hidden inline-flex items-center justify-center gap-1.25 h-10 px-4 rounded-2xl text-sm font-bold text-white border-none cursor-pointer bg-bd-grad shadow-bd transition-all duration-250 hover:bg-bd-gradh hover:shadow-bdh hover:-translate-y-0.5 hover:scale-104 active:scale-92 whitespace-nowrap"
                      >
                        <img src={`${base}del.png`} style={IMG} alt="del" /> Del
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}