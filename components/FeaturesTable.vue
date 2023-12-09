<template>
  <div>
    <table v-for="(feature, index) in features" :key="index" class="mb-10">
      <tbody>
        <tr v-for="(row, rowIndex) in feature.rows" :key="rowIndex">
          <template v-for="(item, itemIndex) in row">
            <th v-if="rowIndex === 0" :key="itemIndex">
              <span
                class="text-sm md:text-base"
                :class="{
                  'text-ui-typo-light': itemIndex === 0,
                  'text-ui-primary': itemIndex === 2,
                }"
                >{{ item }}</span
              >
            </th>
            <td v-else :key="itemIndex">
              <span
                v-if="item !== 'check'"
                class="text-xs md:text-sm"
                :class="{ 'text-ui-typo-light': itemIndex === 0 }"
              >
                {{ item }}
              </span>
              <mdicon v-else name="check" />
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'FeaturesTable',
  setup() {
    const features = ref([
      {
        rows: [
          ['Usage', 'Starter', 'Pro', 'Enterprise'],
          ['Editors', '5 users', 'Unlimited', 'Unlimited'],
          ['Viewers', 'Unlimited', 'Unlimited', 'Unlimited'],
          ['Projects', 'Unlimited', 'Unlimited', 'Unlimited'],
          ['Workspaces', '1 workspace', '1 workspace', 'Unlimited'],
          ['File uploads', '25 MB', '100 MB', 'Unlimited'],
          ['Version history', '', '30 days', 'Unlimited'],
        ],
      },
      {
        rows: [
          ['Features', 'Starter', 'Pro', 'Enterprise'],
          ['Electronic lab notebook', 'check', 'check', 'check'],
          ['Project management', 'check', 'check', 'check'],
          ['Templates', 'check', 'check', 'check'],
          ['Basic integrations', 'check', 'check', 'check'],
          ['File content search', '', '', 'check'],
          ['API & automation', '', '', 'check'],
          ['Spreadsheets', '', '', 'check'],
          ['AI Copilot', '', '', 'check'],
        ],
      },
      {
        rows: [
          ['Security & compliance', 'Starter', 'Pro', 'Enterprise'],
          ['Project export', 'check', 'check', 'check'],
          ['Encryption in transit & at rest', 'check', 'check', 'check'],
          ['Groups & granular permissions', '', 'check', 'check'],
          ['Witness & review (e-signatures)', '', 'check', 'check'],
          ['21 CFR Part 11 compliance', '', 'check', 'check'],
          ['Multi-factor authentication (2FA)', '', 'check', 'check'],
          ['Audit trails', '', 'check', 'check'],
          ['Log streams (S3, Datadog, Splunk)', '', '', 'check'],
          ['SOC 2 Type II compliance', '', '', 'check'],
          ['Session duration policy', '', '', 'check'],
          ['User provisioning (SCIM)', '', '', 'check'],
          ['SAML + Single Sign-On (SSO)', '', '', 'check'],
          ['OAuth 2.0 / OpenID Connect', '', '', 'check'],
          ['IP range restrictions', '', '', 'check'],
          ['Email domain restrictions', '', '', 'check'],
          ['Virtual Private Cloud (VPC)', '', '', 'check'],
          ['Custom roles (RBAC)', '', '', 'check'],
          ['Choice of data residency', 'EU (Frankfurt)', 'EU (Frankfurt)', 'check'],
          ['Weekly export service', '', '', 'check'],
        ],
      },
      {
        rows: [
          ['Support', 'Starter', 'Pro', 'Enterprise'],
          ['Priority support', '', 'check', 'check'],
          ['Dedicated success manager', '', '', 'check'],
          ['Custom contract & invoicing', '', '', 'check'],
          ['Access new features early', '', '', 'check'],
        ],
      },
    ])

    return {
      features,
    }
  },
})
</script>

<style lang="postcss" scoped></style>
