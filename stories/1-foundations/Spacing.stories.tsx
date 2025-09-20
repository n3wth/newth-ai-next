import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        component: 'Spacing system based on 8px grid'
      }
    }
  },
  tags: ['autodocs', 'foundations'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Scale: Story = {
  render: () => (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold text-white mb-8">Spacing Scale</h2>
        <div className="space-y-4">
          {[
            { name: '0', value: '0px', className: 'w-0' },
            { name: '0.5', value: '2px', className: 'w-0.5' },
            { name: '1', value: '4px', className: 'w-1' },
            { name: '1.5', value: '6px', className: 'w-1.5' },
            { name: '2', value: '8px', className: 'w-2' },
            { name: '2.5', value: '10px', className: 'w-2.5' },
            { name: '3', value: '12px', className: 'w-3' },
            { name: '3.5', value: '14px', className: 'w-3.5' },
            { name: '4', value: '16px', className: 'w-4' },
            { name: '5', value: '20px', className: 'w-5' },
            { name: '6', value: '24px', className: 'w-6' },
            { name: '7', value: '28px', className: 'w-7' },
            { name: '8', value: '32px', className: 'w-8' },
            { name: '9', value: '36px', className: 'w-9' },
            { name: '10', value: '40px', className: 'w-10' },
            { name: '11', value: '44px', className: 'w-11' },
            { name: '12', value: '48px', className: 'w-12' },
            { name: '14', value: '56px', className: 'w-14' },
            { name: '16', value: '64px', className: 'w-16' },
            { name: '20', value: '80px', className: 'w-20' },
            { name: '24', value: '96px', className: 'w-24' },
            { name: '28', value: '112px', className: 'w-28' },
            { name: '32', value: '128px', className: 'w-32' },
            { name: '36', value: '144px', className: 'w-36' },
            { name: '40', value: '160px', className: 'w-40' },
            { name: '44', value: '176px', className: 'w-44' },
            { name: '48', value: '192px', className: 'w-48' },
            { name: '52', value: '208px', className: 'w-52' },
            { name: '56', value: '224px', className: 'w-56' },
            { name: '60', value: '240px', className: 'w-60' },
            { name: '64', value: '256px', className: 'w-64' },
            { name: '72', value: '288px', className: 'w-72' },
            { name: '80', value: '320px', className: 'w-80' },
            { name: '96', value: '384px', className: 'w-96' },
          ].map(({ name, value, className }) => (
            <div key={name} className="flex items-center gap-4">
              <span className="text-gray-400 text-sm w-12 text-right font-mono">{name}</span>
              <div className={`${className} h-8 bg-violet-500 rounded`} />
              <span className="text-gray-500 text-xs font-mono">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Padding: Story = {
  render: () => (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-5xl">
        <h2 className="text-2xl font-bold text-white mb-8">Padding Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Uniform Padding</h3>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded">
                <div className="p-2 bg-violet-500/20 rounded m-px">
                  <div className="bg-gray-700 rounded text-xs text-center py-2">p-2 (8px)</div>
                </div>
              </div>
              <div className="bg-gray-900 rounded">
                <div className="p-4 bg-violet-500/20 rounded m-px">
                  <div className="bg-gray-700 rounded text-xs text-center py-2">p-4 (16px)</div>
                </div>
              </div>
              <div className="bg-gray-900 rounded">
                <div className="p-6 bg-violet-500/20 rounded m-px">
                  <div className="bg-gray-700 rounded text-xs text-center py-2">p-6 (24px)</div>
                </div>
              </div>
              <div className="bg-gray-900 rounded">
                <div className="p-8 bg-violet-500/20 rounded m-px">
                  <div className="bg-gray-700 rounded text-xs text-center py-2">p-8 (32px)</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Directional Padding</h3>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded">
                <div className="pt-8 pb-2 px-4 bg-violet-500/20 rounded m-px">
                  <div className="bg-gray-700 rounded text-xs text-center py-2">pt-8 pb-2 px-4</div>
                </div>
              </div>
              <div className="bg-gray-900 rounded">
                <div className="py-2 px-8 bg-violet-500/20 rounded m-px">
                  <div className="bg-gray-700 rounded text-xs text-center py-2">py-2 px-8</div>
                </div>
              </div>
              <div className="bg-gray-900 rounded">
                <div className="pl-12 pr-4 py-4 bg-violet-500/20 rounded m-px">
                  <div className="bg-gray-700 rounded text-xs text-center py-2">pl-12 pr-4 py-4</div>
                </div>
              </div>
              <div className="bg-gray-900 rounded">
                <div className="p-4 pr-16 bg-violet-500/20 rounded m-px">
                  <div className="bg-gray-700 rounded text-xs text-center py-2">p-4 pr-16</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Margin: Story = {
  render: () => (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-5xl">
        <h2 className="text-2xl font-bold text-white mb-8">Margin Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Uniform Margin</h3>
            <div className="bg-gray-900 p-4 rounded">
              <div className="space-y-2">
                <div className="m-2 bg-violet-500 rounded p-3 text-xs text-center">m-2 (8px)</div>
                <div className="m-4 bg-violet-500 rounded p-3 text-xs text-center">m-4 (16px)</div>
                <div className="m-6 bg-violet-500 rounded p-3 text-xs text-center">m-6 (24px)</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Negative Margin</h3>
            <div className="bg-gray-900 p-8 rounded overflow-hidden">
              <div className="bg-violet-500/20 p-4 rounded">
                <div className="-mx-4 bg-violet-500 rounded p-3 text-xs text-center">-mx-4</div>
              </div>
              <div className="bg-violet-500/20 p-4 rounded mt-4">
                <div className="-mt-8 bg-violet-500 rounded p-3 text-xs text-center">-mt-8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Gap: Story = {
  render: () => (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-5xl">
        <h2 className="text-2xl font-bold text-white mb-8">Gap in Flexbox & Grid</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Flexbox Gap</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">gap-2 (8px)</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-violet-500 rounded p-4 text-xs text-center">Item</div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">gap-4 (16px)</p>
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-violet-500 rounded p-4 text-xs text-center">Item</div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">gap-8 (32px)</p>
                <div className="flex gap-8">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-violet-500 rounded p-4 text-xs text-center">Item</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Grid Gap</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">gap-4 (16px)</p>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <div key={i} className="bg-violet-500 rounded p-4 text-xs text-center">Cell</div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">gap-x-2 gap-y-6</p>
                <div className="grid grid-cols-4 gap-x-2 gap-y-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <div key={i} className="bg-violet-500 rounded p-4 text-xs text-center">Cell</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SpaceUtilities: Story = {
  render: () => (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-5xl">
        <h2 className="text-2xl font-bold text-white mb-8">Space Between/Around</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Vertical Spacing (space-y)</h3>
            <div className="bg-gray-900 p-4 rounded">
              <div className="space-y-4">
                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 1</div>
                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 2</div>
                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 3</div>
              </div>
              <p className="text-xs text-gray-500 mt-4">space-y-4</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Horizontal Spacing (space-x)</h3>
            <div className="bg-gray-900 p-4 rounded">
              <div className="flex space-x-4">
                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 1</div>
                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 2</div>
                <div className="bg-violet-500 rounded p-3 text-xs text-center">Item 3</div>
              </div>
              <p className="text-xs text-gray-500 mt-4">space-x-4</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-400 mb-4">Common Patterns</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="text-sm font-medium text-white mb-3">Card Spacing</h4>
              <div className="p-6 bg-gray-800 rounded">
                <h5 className="text-white font-semibold mb-2">Title</h5>
                <p className="text-gray-400 text-sm">Content with p-6</p>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="text-sm font-medium text-white mb-3">Button Group</h4>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-violet-500 rounded text-sm">Save</button>
                <button className="px-4 py-2 bg-gray-700 rounded text-sm">Cancel</button>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="text-sm font-medium text-white mb-3">Section Spacing</h4>
              <div className="space-y-8">
                <div className="h-8 bg-gray-700 rounded"></div>
                <div className="h-8 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}