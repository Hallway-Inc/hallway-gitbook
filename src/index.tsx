import { createIntegration, createComponent } from '@gitbook/runtime';

const helloWorldBlock = createComponent({
    componentId: 'hello-world',
    initialState: {
        message: 'Say hello! 2'
    },
    action: async (previous, action) => {
      console.log("Action", action);
        switch (action.action) {
          // @ts-ignore
            case 'say':
                return { state: { message: 'Hello world 2' } };
        }
    },
    render: async ({ props, state }) => {
      console.log("Rendering");
        return (
            <block>
                <button label={state.message} onPress={{ action: 'say' }} />
            </block>
        );
    }
});

const hallwayEmbedBlock = createComponent({
    componentId: 'hallway-embed',
    initialState: {},
    render: async ({ props, state }) => {
        return (
            <block>
                <webframe 
                    source={{ url: "https://hallway.ai/embed/a0a6b76d-9237-4114-9623-d8ee86de1233" }}
                    aspectRatio={16/9}
                />
            </block>
        );
    }
});

export default createIntegration({
    components: [helloWorldBlock, hallwayEmbedBlock]
});