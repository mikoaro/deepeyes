"use client";

import type { GatewayConfiguration as GatewayConfigType } from "@/types/gateway";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Save } from "lucide-react";
import { useState } from "react";

interface GatewayConfigurationProps {
  configuration: GatewayConfigType;
}

export function GatewayConfiguration({
  configuration,
}: GatewayConfigurationProps) {
  const [config, setConfig] = useState(configuration);

  const handleSave = () => {
    // In a real application, this would send the updated configuration to the server
    console.log("Saving configuration:", config);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <Button onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-x-12 gap-y-6">
        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">Device Type:</Label>
          <Input value={config.deviceType} disabled className="flex-1" />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">WAN Interface:</Label>
          <Select
            value={config.wanInterface}
            onValueChange={(value) =>
              setConfig((prev) => ({ ...prev, wanInterface: value }))
            }
          >
            <SelectTrigger className="flex-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="LAN1">LAN1</SelectItem>
              <SelectItem value="LAN2">LAN2</SelectItem>
              <SelectItem value="Cellular1">Cellular1</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">NTP Enable:</Label>
          <Switch
            checked={config.ntpEnable}
            onCheckedChange={(checked) =>
              setConfig((prev) => ({ ...prev, ntpEnable: checked }))
            }
          />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">Model Name:</Label>
          <Input value={config.modelName} disabled className="flex-1" />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">IP Address:</Label>
          <Input value={config.ipAddress} disabled className="flex-1" />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">NTP Server:</Label>
          <Input
            value={config.ntpServer}
            onChange={(e) =>
              setConfig((prev) => ({ ...prev, ntpServer: e.target.value }))
            }
            disabled={!config.ntpEnable}
            className="flex-1"
          />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">Firmware Version:</Label>
          <Input value={config.firmwareVersion} disabled className="flex-1" />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">Serial No:</Label>
          <Input value={config.serialNo} disabled className="flex-1" />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">NTP Interval:</Label>
          <Input
            type="number"
            value={config.ntpInterval}
            onChange={(e) =>
              setConfig((prev) => ({
                ...prev,
                ntpInterval: Number.parseInt(e.target.value),
              }))
            }
            disabled={!config.ntpEnable}
            className="flex-1"
          />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">ThingsPro Version:</Label>
          <Input value={config.thingsProVersion} disabled className="flex-1" />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">Latest Updated At:</Label>
          <Input
            value={new Date(config.latestUpdatedAt).toLocaleString()}
            disabled
            className="flex-1"
          />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">Time Zone:</Label>
          <Select
            value={config.timeZone}
            onValueChange={(value) =>
              setConfig((prev) => ({ ...prev, timeZone: value }))
            }
          >
            <SelectTrigger className="flex-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Asia/Taipei">Asia/Taipei</SelectItem>
              <SelectItem value="UTC">UTC</SelectItem>
              <SelectItem value="America/New_York">America/New_York</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">Host Name:</Label>
          <Input
            value={config.hostName}
            onChange={(e) =>
              setConfig((prev) => ({ ...prev, hostName: e.target.value }))
            }
            className="flex-1"
          />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">Description:</Label>
          <Input
            value={config.description}
            onChange={(e) =>
              setConfig((prev) => ({ ...prev, description: e.target.value }))
            }
            className="flex-1"
          />
        </div>

        <div className="flex items-center gap-4">
          <Label className="w-32 flex-shrink-0">Status:</Label>
          <Input value={config.status} disabled className="flex-1" />
        </div>
      </div>
    </div>
  );
}
