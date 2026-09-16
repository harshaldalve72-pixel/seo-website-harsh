import Script from 'next/script';

interface SchemaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
}

export function Schema({ data }: SchemaProps) {
  return (
    <Script
      id={`schema-${data['@type']?.toString().toLowerCase() || 'default'}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  );
}
