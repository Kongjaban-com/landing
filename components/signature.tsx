interface SignatureProps {
  name: string
}

export function Signature({ name }: SignatureProps) {
  return (
    <div className="space-y-2">
      <div className="h-12 relative">
        <svg
          viewBox="0 0 200 50"
          className="h-full w-auto text-gray-900 absolute left-0"
          style={{ fontFamily: "cursive" }}
        >
          <text x="10" y="35" className="text-3xl fill-current">
            {name}
          </text>
        </svg>
      </div>
      <p className="text-gray-600">{name}</p>
    </div>
  )
}

