'use client'
import {
  MutableRefObject,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

// Crie um contexto que modifica a cor de texto do Header e Socials, também oculta o socials quando estamos na página de contato
const PageAdjustmentsContext = createContext({
  textColor: 'text-RED',
  contactRef: {} as MutableRefObject<null>,
  isContactVisible: false,
})

// Crie um provedor para o contexto que inclui a lógica do observador de interseção
interface ProviderProps {
  children: ReactNode
}

export function PageAdjustmentsProvider({ children }: ProviderProps) {
  const [textColor, setTextColor] = useState('text-RED')
  const [isContactVisible, setIsContactVisible] = useState(false)
  const contactRef = useRef(null)

  useEffect(() => {
    const currentContactRef = contactRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTextColor(entry.isIntersecting ? 'text-WHITE' : 'text-RED')
        setIsContactVisible(entry.isIntersecting)
      },
      { threshold: 0.9 },
    )

    if (currentContactRef) {
      observer.observe(currentContactRef)
    }

    return () => {
      if (currentContactRef) {
        observer.unobserve(currentContactRef)
      }
    }
  }, [])

  return (
    <PageAdjustmentsContext.Provider
      value={{ textColor, contactRef, isContactVisible }}
    >
      {children}
    </PageAdjustmentsContext.Provider>
  )
}

// Crie um hook personalizado para usar o contexto
export function usePageAdjustmentsContext() {
  return useContext(PageAdjustmentsContext)
}
