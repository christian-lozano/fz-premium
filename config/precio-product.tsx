export const precioProduct = (
  descuento: number | string,
  precioEcommerce: number,
  precioManual: number | undefined
) => {
  let resultado: Number
  if (precioManual) {
    resultado = precioManual
  } else {
    const precio = precioEcommerce

    if (precio < 20) {
      resultado = 999
    } else {
      const operation = (Number(20) / 100) * Number(precio)
      resultado = Number(precio) - operation
    }
  }

  return Number(resultado.toFixed(0))
}
