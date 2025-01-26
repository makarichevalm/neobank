import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TAccordionItem } from '@/types'
import Accordion from '@/components/ui/Accordion/Accordion'

describe('Accordion component', () => {
  const items: TAccordionItem[] = [
    {
      index: 1,
      title: 'Item 1',
      content: 'Content for item 1',
    },
    {
      index: 2,
      title: 'Item 2',
      content: 'Content for item 2',
    },
  ]
  it('render item titles', () => {
    render(<Accordion items={items} />)
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    })
  })
  it('open and close an item when clicked', () => {
    render(<Accordion items={items} />)
    const secondItem = screen.getByText('Item 2')
    fireEvent.click(secondItem)
    const secondItemContent = screen.getByText('Content for item 2')
    expect(secondItemContent).toBeVisible()
    fireEvent.click(secondItem)
    expect(secondItemContent).not.toBeVisible()
  })
  it('only one item can be opened at a time', () => {
    render(<Accordion items={items} />)
    const firstItem = screen.getByText('Item 1')
    fireEvent.click(firstItem)
    const firstItemContent = screen.getByText('Content for item 1')
    expect(firstItemContent).toBeVisible()
    const secondItem = screen.getByText('Item 2')
    fireEvent.click(secondItem)
    expect(screen.getByText('Content for item 2')).toBeVisible()
    expect(firstItemContent).not.toBeVisible()
  })
})
