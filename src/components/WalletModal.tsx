import { useState, type ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNWC } from '@/hooks/useNWCContext';
import { Trash2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/useToast';

interface WalletModalProps {
  children: ReactNode;
}

export function WalletModal({ children }: WalletModalProps) {
  const [open, setOpen] = useState(false);
  const [nwcString, setNwcString] = useState('');
  const { connections, addConnection, removeConnection, setActiveConnection } = useNWC();
  const { toast } = useToast();

  const handleAddConnection = () => {
    if (!nwcString.trim()) {
      toast({
        title: 'Invalid connection string',
        description: 'Please enter a valid NWC connection string',
        variant: 'destructive',
      });
      return;
    }

    try {
      addConnection(nwcString);
      setNwcString('');
      toast({
        title: 'Connection added',
        description: 'Your wallet has been connected successfully',
      });
    } catch (error) {
      toast({
        title: 'Connection failed',
        description: error instanceof Error ? error.message : 'Failed to add connection',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Wallet Settings</DialogTitle>
          <DialogDescription>
            Connect your Lightning wallet using Nostr Wallet Connect (NWC)
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Add new connection */}
          <div className="space-y-2">
            <Label htmlFor="nwc-string">NWC Connection String</Label>
            <div className="flex gap-2">
              <Input
                id="nwc-string"
                type="password"
                placeholder="nostr+walletconnect://..."
                value={nwcString}
                onChange={(e) => setNwcString(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAddConnection();
                  }
                }}
              />
              <Button onClick={handleAddConnection} size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Get a connection string from your NWC-compatible wallet
            </p>
          </div>

          {/* List of connections */}
          {connections.length > 0 && (
            <div className="space-y-2">
              <Label>Connected Wallets</Label>
              <div className="space-y-2">
                {connections.map((conn) => (
                  <div
                    key={conn.connectionString}
                    className="flex items-center justify-between p-3 border rounded-md"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {conn.alias || 'Unnamed Wallet'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {conn.isConnected ? 'Connected' : 'Disconnected'}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveConnection(conn.connectionString)}
                      >
                        Set Active
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeConnection(conn.connectionString)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
