import { Stack, View, Text, Box, Badge, Code, Avatar, Button } from "@cosmoau/ui";
import { SmileyMeh } from "phosphor-react";
import { toast } from "react-hot-toast";

export default function Home(): JSX.Element {
  return (
    <View container top={7} bottom={7}>
      <Stack direction="row">
        <Stack direction="column">
          <Box>
            <Text as="h1">@cosmoau/ui Demos</Text>
            <Text>
              A quick one-pager for referencing components. This provides a general guide as to the
              usage of components, but it currently lacks detailed prop details. Stay tuned.
            </Text>
            <Text>There are a few components that are important, but not outlined herein:</Text>
            <Text as="ol" top={3}>
              <Text as="li">
                <Badge inline={4}>Provider</Badge> This wraps the file. See that for implementation.
              </Text>
              <Text as="li">
                getCssText: This provides styling for SSR. See{" "}
                <a
                  target="_blank"
                  href="https://stitches.dev/docs/server-side-rendering"
                  rel="noreferrer">
                  stitches.dev/docs/server-side-rendering
                </a>
              </Text>
              <Text as="li">
                <Badge inline={4}>View</Badge> This is a section component, used to provide a
                container for rows, columns etc. Should wrap every section.
              </Text>
            </Text>
          </Box>
        </Stack>
      </Stack>

      <Stack top={5} direction="row">
        <Stack direction="column">
          {/* Avatar */}
          <Stack>
            <Box>
              <Text as="h3">Avatar</Text>
              <Box>
                <Text as="h5" bottom={3}>
                  Demo
                </Text>
                <Stack>
                  <Avatar
                    src="/image.jpg"
                    fallback="PM"
                    width={33}
                    alt="A Puch Magnum, a very fine machine."
                  />
                </Stack>
                <Stack>
                  <Avatar src="" fallback="PM" width={33} alt="An avatar that will fallback" />
                </Stack>
              </Box>
              <Stack top={3}>
                <Box>
                  <Text as="h5" bottom={3}>
                    Usage
                  </Text>
                  <Code
                    copy>{`<Avatar src="/image.jpg" fallback="PM" width={33} alt='A Puch Magnum, a very fine machine.'/>`}</Code>
                </Box>
              </Stack>
            </Box>
          </Stack>
          {/* Badge */}
          <Stack top={4}>
            <Box>
              <Text as="h3">Badge</Text>

              <Box>
                <Text as="h5" bottom={3}>
                  Demo
                </Text>
                <Badge theme="border" icon={<SmileyMeh />} closable>
                  Close me
                </Badge>
              </Box>
              <Stack top={3}>
                <Box>
                  <Text as="h5" bottom={3}>
                    Usage
                  </Text>
                  <Code copy>{`<Badge theme="border" icon={<SmileyMeh />} closable>Close me</Badge>
                `}</Code>
                </Box>
              </Stack>
            </Box>
          </Stack>
          {/* Badge */}
          <Stack top={4}>
            <Box>
              <Text as="h3">Button</Text>
              <Box>
                <Text as="h5" bottom={3}>
                  Demo
                </Text>
                <Button inline={5}>A demo button</Button>
                <Button onClick={(): void | string => toast("A button with toast!")}>
                  A demo button
                </Button>
              </Box>
              <Stack top={3}>
                <Box>
                  <Text as="h5" bottom={3}>
                    Usage
                  </Text>
                  <Code copy>{`<Button inline={5}>A demo button</Button>
                `}</Code>
                </Box>
              </Stack>
            </Box>
          </Stack>
          {/* Badge */}
          <Stack top={4}>
            <Box>
              <Text as="h3">Button</Text>
              <Box>
                <Text as="h5" bottom={3}>
                  Demo
                </Text>
                <Button inline={5}>A demo button</Button>
                <Button onClick={(): void | string => toast("A button with toast!")}>
                  A demo button
                </Button>
              </Box>
              <Stack top={3}>
                <Box>
                  <Text as="h5" bottom={3}>
                    Usage
                  </Text>
                  <Code copy>{`<Button inline={5}>A demo button</Button>
                `}</Code>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </View>
  );
}
