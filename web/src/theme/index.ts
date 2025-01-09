import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Inter',
  components: {
    Modal: {
      styles: {
        modal: {
          background: 'radial-gradient(circle,  #171717CC 0%, rgba #171717CC 80%)',
          opacity: 0.95,
        },
      },
    },

    TextInput: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          color: '#fff',
        },
      },
    },
    
    TimeInput: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          color: '#fff'
        },
      },
    },

    Select: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          color: '#fff'
        },
      },
    },


    MultiSelect: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          color: '#fff'
        },
      },
    },

    NumberInput: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          color: '#fff'
        },

        
      },
    },

    Checkbox: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
        },
      },
    },

    PasswordInput: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
        },
        icon: {
          color:'white',
        },
      },
    },

    Button: {
      styles: {
        root: {
          color:'white',
        },
      },
    },
  },
};